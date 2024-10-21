import { Module } from '@nestjs/common';
import { SkinportModule } from './skinport/skinport.module';

@Module({
  imports: [SkinportModule],
})
export class ApiModule {}
