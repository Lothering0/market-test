import { Module } from '@nestjs/common';
import { CreateItemsController } from './create-items.controller';
import { CreateItemsRepository } from './create-items.repository';
import { CreateItemsService } from './create-items.service';

@Module({
  providers: [CreateItemsRepository, CreateItemsService, CreateItemsController],
  controllers: [CreateItemsController],
  exports: [CreateItemsController],
})
export class CreateItemsModule {}
