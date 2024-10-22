import { Module } from '@nestjs/common';
import { BuyItemsController } from './buy-items.controller';
import { BuyItemsService } from './buy-items.service';

@Module({
  providers: [BuyItemsService],
  controllers: [BuyItemsController],
})
export class BuyItemsModule {}
