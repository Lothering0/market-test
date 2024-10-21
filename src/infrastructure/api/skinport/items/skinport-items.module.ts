import { Global, Module } from '@nestjs/common';
import { SkinportItemsApi } from './skinport-items.api';

@Global()
@Module({
  providers: [SkinportItemsApi],
  exports: [SkinportItemsApi],
})
export class SkinportItemsModule {}
