import { Module } from '@nestjs/common';
import { CreateItemsController } from './create-items.controller';
import { CreateItemsService } from './create-items.service';

@Module({
  providers: [CreateItemsService, CreateItemsController],
  controllers: [CreateItemsController],
  exports: [CreateItemsController],
})
export class CreateItemsModule {}
