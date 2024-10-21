import { Controller, UseGuards } from '@nestjs/common';
import { Item } from 'src/models/items/item.model';
import { CreateItemsService } from './create-items.service';
import { AuthGuard } from 'src/application/auth/auth.guard';

@Controller()
@UseGuards(AuthGuard)
export class CreateItemsController {
  constructor(private readonly createItemsService: CreateItemsService) {}

  create(item: Item) {
    return this.createMany([item]);
  }

  createMany(items: Item[]) {
    return this.createItemsService.create(items);
  }
}
