import { Module } from '@nestjs/common';
import { ItemsMigrationsModule } from './items/items-migrations.module';

@Module({
  imports: [ItemsMigrationsModule],
})
export class MigrationsModule {}
