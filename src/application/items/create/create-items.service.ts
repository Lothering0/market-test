import { Injectable } from '@nestjs/common';
import { CreateItemsRepository } from './create-items.repository';
import { Item } from 'src/models/items/item.model';

@Injectable()
export class CreateItemsService {
  constructor(private readonly createItemsRepository: CreateItemsRepository) {}

  async create(items: Item[]) {
    await this.createItemsRepository.insert(items);
  }
}
