import { Injectable } from '@nestjs/common';
import { GetItemsRepository } from './get-items.repository';

@Injectable()
export class GetItemsService {
  constructor(private readonly getItemsRepository: GetItemsRepository) {}

  getMany() {
    return this.getItemsRepository.getMany();
  }
}
