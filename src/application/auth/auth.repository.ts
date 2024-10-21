import { Inject, Injectable } from '@nestjs/common';
import { Sql } from 'postgres';
import { POSTGRES_INJECTION_TOKEN } from 'src/infrastructure/postgres/postgres.injection-token';
import { User } from 'src/models/users/user.model';

@Injectable()
export class AuthRepository {
  constructor(@Inject(POSTGRES_INJECTION_TOKEN) private readonly sql: Sql) {}

  async isAccessTokenValid(accessToken: string) {
    const result = await this.sql<User[]>`
      SELECT COUNT(*)
        FROM users
       WHERE access_token = ${accessToken}
    `;

    const isAccessTokenExists = result.count > 0;

    return isAccessTokenExists;
  }
}
