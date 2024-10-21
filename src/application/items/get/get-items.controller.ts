import { Controller, Get } from '@nestjs/common';
import { GetItemsService } from './get-items.service';

@Controller('/items')
export class GetItemsController {
  constructor(private readonly getItemsService: GetItemsService) {}

  @Get()
  getMany() {
    return this.getItemsService.getMany();
  }
}
