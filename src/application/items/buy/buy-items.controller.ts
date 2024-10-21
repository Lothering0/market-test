import { Controller, Param, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/application/auth/auth.guard';

@Controller('/items/buy')
@UseGuards(AuthGuard)
export class BuyItemsController {
  @Post('/:id')
  buy(@Param('id') itemId: number) {
    return itemId;
  }
}
