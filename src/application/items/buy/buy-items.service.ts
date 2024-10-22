import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ItemsRepository } from 'src/repositories/items.repository';

@Injectable()
export class BuyItemsService {
  constructor(private readonly itemsRepository: ItemsRepository) {}

  async buy(userId: number, itemId: number) {
    try {
      const { user } = await this.itemsRepository.buy(userId, itemId);
      return user.balance;
    } catch (error) {
      throw new HttpException(String(error), HttpStatus.BAD_REQUEST);
    }
  }
}
