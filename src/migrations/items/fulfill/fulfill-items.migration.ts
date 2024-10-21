import { Injectable } from '@nestjs/common';
import { Migration } from '../../migration.interface';
import { SkinportItemsApi } from 'src/infrastructure/api/skinport/items/skinport-items.api';
import { SkinportItem } from 'src/infrastructure/api/skinport/items/skinport-item.model';
import { Item } from 'src/models/items/item.model';
import { CreateItemsController } from 'src/application/items/create/create-items.controller';

@Injectable()
export class FulfillItemsMigration implements Migration {
  constructor(
    private readonly createItemsController: CreateItemsController,
    private readonly skinportItemsApi: SkinportItemsApi,
  ) {}

  async up() {
    const { items, tradableItems } = await this.fetchSkinportItems();
    const toCreate = this.getItemsToCreate(items, tradableItems);
    return this.createItemsController.createMany(toCreate);
  }

  private async fetchSkinportItems(): Promise<any> {
    const items = await this.skinportItemsApi.get();
    const tradableItems = await this.skinportItemsApi.getTradable();

    return {
      items: this.prepareSkinportItems(items),
      tradableItems: this.prepareSkinportItems(tradableItems),
    };
  }

  private prepareSkinportItems(items: SkinportItem[]) {
    // Return limited count of items. API returns too many (>20k elements)
    return items.slice(0, 10);
  }

  private getItemsToCreate(skinportItems: SkinportItem[], skinportTradableItems: SkinportItem[]): Item[] {
    return skinportItems.map((item, index) => ({
      name: item.market_hash_name,
      min_price: item.min_price,
      min_price_tradable: skinportTradableItems[index]?.min_price ?? 0,
    }));
  }
}
