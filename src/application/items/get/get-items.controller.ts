import { Controller, Get, UseGuards } from '@nestjs/common';
import { GetItemsService } from './get-items.service';
import { AuthGuard } from 'src/application/auth/auth.guard';

@Controller('/items')
@UseGuards(AuthGuard)
export class GetItemsController {
  constructor(private readonly getItemsService: GetItemsService) {}

  @Get()
  getMany() {
    return this.getItemsService.getMany();
  }
}
