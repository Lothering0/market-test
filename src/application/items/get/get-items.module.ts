import { Module } from '@nestjs/common';
import { GetItemsController } from './get-items.controller';
import { GetItemsRepository } from './get-items.repository';
import { GetItemsService } from './get-items.service';

@Module({
  providers: [GetItemsRepository, GetItemsService],
  controllers: [GetItemsController],
})
export class GetItemsModule {}
