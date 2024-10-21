import { Module } from '@nestjs/common';
import { BuyItemsController } from './buy-items.controller';

@Module({
  controllers: [BuyItemsController],
})
export class BuyItemsModule {}
