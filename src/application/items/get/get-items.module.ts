import { Module } from '@nestjs/common';
import { GetItemsController } from './get-items.controller';

@Module({
  controllers: [GetItemsController],
})
export class GetItemsModule {}
