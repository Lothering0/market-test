import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { Sql, TransactionSql } from 'postgres';
import { POSTGRES_INJECTION_TOKEN } from 'src/infrastructure/postgres/postgres.injection-token';
import { Item } from 'src/models/items/item.model';
import { Purchase } from 'src/models/purchases/purchase.model';
import { User } from 'src/models/users/user.model';
import { createModel } from 'src/utils/create-model';
import { toPlain } from 'src/utils/to-plain';

@Injectable()
export class ItemsRepository {
  constructor(
    @Inject(POSTGRES_INJECTION_TOKEN)
    private readonly sql: Sql,
    @Inject(CACHE_MANAGER)
    private readonly cacheManager: Cache,
  ) {}

  async getMany() {
    /** Caching time. 5 minutes */
    const TTL = 1000 * 60 * 5;
    const CACHE_KEY = 'items';

    const cachedData = await this.cacheManager.get(CACHE_KEY);

    if (cachedData) return cachedData;

    const data = await this.sql<Item[]>`SELECT * FROM items`;

    this.cacheManager.set(CACHE_KEY, data, TTL);
    return data;
  }

  create(items: Item[]) {
    return this.sql<Item[]>`INSERT INTO items ${this.sql(items)}`;
  }

  async buy(userId: number, itemId: number) {
    return this.sql.begin(async (sql) => {
      const user = await this.getUser(sql, userId);
      const item = await this.getItem(sql, itemId);
      await this.buyItem(sql, user, item);
      const purchase = await this.createPurchase(sql, user, item);

      return { user, item, purchase };
    });
  }

  private async getUser(sql: TransactionSql, userId: number) {
    const [plainUser] = await sql<User[]>`
      SELECT *
        FROM users
       WHERE id = ${userId}
    `;
    const user = createModel(User, plainUser);

    if (!user) {
      throw new Error('User not found');
    }

    return user;
  }

  private async getItem(sql: TransactionSql, itemId: number) {
    const [plainItem] = await sql<Item[]>`
      SELECT *
        FROM items
       WHERE id = ${itemId}
    `;
    const item = createModel(Item, plainItem);

    if (!item) {
      throw new Error('Item not found');
    }

    return item;
  }

  private async buyItem(sql: TransactionSql, user: User, item: Item) {
    const canBuy = user.canBuyItemWithPrice(item.minPrice);
    if (!canBuy) {
      throw new Error('Not enough money');
    }

    user.decreaseBalance(item.minPrice);
    await sql`
      UPDATE users
         SET ${sql(toPlain(user))}
       WHERE id = ${user.id}
    `;
  }

  private async createPurchase(sql: TransactionSql, user: User, item: Item) {
    const newPurchase = new Purchase();
    newPurchase.userId = user.id;
    newPurchase.itemId = item.id!;
    newPurchase.price = item.minPrice;

    const [purchase] = await sql<Purchase[]>`INSERT INTO purchases ${sql(toPlain(newPurchase))}`;
    return purchase;
  }
}
