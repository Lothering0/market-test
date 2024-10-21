import { Controller, Get } from '@nestjs/common';

@Controller('/items')
export class GetItemsController {
  @Get()
  getMany() {
    return [];
  }
}
