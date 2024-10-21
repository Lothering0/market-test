import { Injectable } from '@nestjs/common';
import { ItemsRepository } from 'src/repositories/items.repository';

@Injectable()
export class GetItemsService {
  constructor(private readonly itemsRepository: ItemsRepository) {}

  getMany() {
    return this.itemsRepository.getMany();
  }
}
