import { Inject, Injectable } from '@nestjs/common';
import { Sql } from 'postgres';
import { POSTGRES_INJECTION_TOKEN } from 'src/infrastructure/postgres/postgres.injection-token';
import { User } from 'src/models/users/user.model';
import { createModel } from 'src/utils/create-model';

@Injectable()
export class LoginRepository {
  constructor(@Inject(POSTGRES_INJECTION_TOKEN) private readonly sql: Sql) {}

  async getUserByEmail(email: string) {
    const [user] = await this.sql<User[]>`
      SELECT *
        FROM users
       WHERE email = ${email}`;

    return createModel(User, user);
  }
}
