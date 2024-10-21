import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { Sql } from 'postgres';
import { POSTGRES_INJECTION_TOKEN } from 'src/infrastructure/postgres/postgres.injection-token';
import { Item } from 'src/models/items/item.model';

@Injectable()
export class GetItemsRepository {
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
}
