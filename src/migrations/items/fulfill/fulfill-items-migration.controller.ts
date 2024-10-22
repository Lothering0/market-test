import { Controller, Post, UseGuards } from '@nestjs/common';
import { FulfillItemsMigration } from './fulfill-items.migration';
import { AuthGuard } from 'src/application/auth/auth.guard';

@Controller('/migrations/items')
@UseGuards(AuthGuard)
export class FulfillItemsMigrationController {
  constructor(private readonly fulfillItemsMigration: FulfillItemsMigration) {}

  @Post('/fulfill')
  fulfill() {
    return this.fulfillItemsMigration.up();
  }
}
