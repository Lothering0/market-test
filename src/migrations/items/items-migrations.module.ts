import { Module } from '@nestjs/common';
import { FulfillItemsMigrationModule } from './fulfill/fulfill-items-migration.module';

@Module({
  imports: [FulfillItemsMigrationModule],
})
export class ItemsMigrationsModule {}
