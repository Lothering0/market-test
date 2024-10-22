import { Inject, Injectable } from '@nestjs/common';
import { Sql } from 'postgres';
import { POSTGRES_INJECTION_TOKEN } from 'src/infrastructure/postgres/postgres.injection-token';
import { User } from 'src/models/users/user.model';
import { createModel } from 'src/utils/create-model';
import { toPlain } from 'src/utils/to-plain';

@Injectable()
export class UsersRepository {
  constructor(@Inject(POSTGRES_INJECTION_TOKEN) private readonly sql: Sql) {}

  async getUserByEmail(email: string) {
    const [user] = await this.sql<User[]>`
      SELECT *
        FROM users
       WHERE email = ${email}
    `;

    return createModel(User, user);
  }

  async isAccessTokenValid(accessToken: string) {
    const result = await this.sql<User[]>`
      SELECT COUNT(*)
        FROM users
       WHERE access_token = ${accessToken}
    `;

    const isAccessTokenExists = result.count > 0;

    return isAccessTokenExists;
  }

  async update(user: User) {
    return this.sql<User[]>`
      UPDATE users
         SET ${this.sql(toPlain(user))}
       WHERE id = ${user.id}
    `;
  }
}