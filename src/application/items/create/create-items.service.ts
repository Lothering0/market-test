import { Injectable } from '@nestjs/common';
import { Item } from 'src/models/items/item.model';
import { ItemsRepository } from 'src/repositories/items.repository';

@Injectable()
export class CreateItemsService {
  constructor(private readonly itemsRepository: ItemsRepository) {}

  async create(items: Item[]) {
    await this.itemsRepository.create(items);
  }
}
