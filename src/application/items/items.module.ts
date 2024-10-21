import { Module } from '@nestjs/common';
import { GetItemsModule } from './get/get-items.module';
import { BuyItemsModule } from './buy/buy-items.module';

@Module({
  imports: [GetItemsModule, BuyItemsModule],
})
export class ItemsModule {}
