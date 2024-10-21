import { Module } from '@nestjs/common';
import { SkinportItemsModule } from './items/skinport-items.module';

@Module({
  imports: [SkinportItemsModule],
})
export class SkinportModule {}
