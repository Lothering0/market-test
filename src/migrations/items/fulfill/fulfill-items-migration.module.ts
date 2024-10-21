import { Module } from '@nestjs/common';
import { FulfillItemsMigration } from './fulfill-items.migration';
import { FulfillItemsMigrationController } from './fulfill-items-migration.controller';
import { CreateItemsModule } from 'src/application/items/create/create-items.module';

@Module({
  imports: [CreateItemsModule],
  controllers: [FulfillItemsMigrationController],
  providers: [FulfillItemsMigration],
})
export class FulfillItemsMigrationModule {}
