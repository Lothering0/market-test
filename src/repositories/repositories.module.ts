import { Global, Module } from '@nestjs/common';
import { ItemsRepository } from './items.repository';
import { UsersRepository } from './users.repository';

@Global()
@Module({
  providers: [UsersRepository, ItemsRepository],
  exports: [UsersRepository, ItemsRepository],
})
export class RepositoriesModule {}
