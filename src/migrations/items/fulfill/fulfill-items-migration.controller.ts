import { Controller, Post } from '@nestjs/common';
import { FulfillItemsMigration } from './fulfill-items.migration';

@Controller('/migrations/items')
export class FulfillItemsMigrationController {
  constructor(private readonly fulfillItemsMigration: FulfillItemsMigration) {}

  @Post('/fulfill')
  fulfill() {
    return this.fulfillItemsMigration.up();
  }
}
