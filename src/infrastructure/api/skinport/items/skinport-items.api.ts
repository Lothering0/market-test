import { Injectable } from '@nestjs/common';
import { SkinportItem } from './skinport-item.model';

interface GetManyDto {
  tradable: boolean;
}

@Injectable()
export class SkinportItemsApi {
  private static MAIN_URL = `https://api.skinport.com`;

  async get(): Promise<SkinportItem[]> {
    return this.getMany({ tradable: false });
  }

  async getTradable(): Promise<SkinportItem[]> {
    return this.getMany({ tradable: true });
  }

  private async getMany(dto: GetManyDto) {
    /** Boolean value converted to 0|1 */
    const isTradableNumbered = Number(dto.tradable);
    const response = await fetch(`${SkinportItemsApi.MAIN_URL}/v1/items?tradable=${isTradableNumbered}`);
    return response.json();
  }
}
