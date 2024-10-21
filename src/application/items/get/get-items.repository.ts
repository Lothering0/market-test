import { Inject, Injectable } from '@nestjs/common';
import { Sql } from 'postgres';
import { POSTGRES_INJECTION_TOKEN } from 'src/infrastructure/postgres/postgres.injection-token';
import { Item } from 'src/models/items/item.model';

@Injectable()
export class GetItemsRepository {
  constructor(@Inject(POSTGRES_INJECTION_TOKEN) private readonly sql: Sql) {}

  getMany() {
    return this.sql<Item[]>`SELECT * FROM items`;
  }
}
