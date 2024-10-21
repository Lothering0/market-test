import { Controller, Param, Post } from '@nestjs/common';

@Controller('/items/buy')
export class BuyItemsController {
  @Post('/:id')
  buy(@Param('id') itemId: number) {
    return itemId;
  }
}
