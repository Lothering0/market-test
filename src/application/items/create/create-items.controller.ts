import { Controller } from '@nestjs/common';
import { Item } from 'src/models/items/item.model';
import { CreateItemsService } from './create-items.service';

@Controller()
export class CreateItemsController {
  constructor(private readonly createItemsService: CreateItemsService) {}

  create(item: Item) {
    return this.createMany([item]);
  }

  createMany(items: Item[]) {
    return this.createItemsService.create(items);
  }
}
