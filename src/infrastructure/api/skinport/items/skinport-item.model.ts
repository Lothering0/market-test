export class SkinportItem {
  market_hash_name!: string;
  currency!: 'EUR' | 'RUB' | 'USD';
  suggested_price!: number;
  item_page!: string;
  market_page!: string;
  min_price!: number;
  max_price!: number;
  mean_price!: number;
  median_price!: number;
  quantity!: number;
  created_at!: number;
  updated_at!: number;
}
