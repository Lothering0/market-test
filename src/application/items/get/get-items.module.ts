import { Module } from '@nestjs/common';
import { GetItemsController } from './get-items.controller';
import { GetItemsService } from './get-items.service';

@Module({
  providers: [GetItemsService],
  controllers: [GetItemsController],
})
export class GetItemsModule {}
