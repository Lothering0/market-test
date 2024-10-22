import { Controller, Headers, Param, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/application/auth/auth.guard';
import { BuyItemsService } from './buy-items.service';

@Controller('/items/buy')
@UseGuards(AuthGuard)
export class BuyItemsController {
  constructor(private readonly buyItemsService: BuyItemsService) {}

  @Post('/:id')
  buy(@Headers('x-user-id') userId: number, @Param('id') itemId: number) {
    return this.buyItemsService.buy(userId, itemId);
  }
}
