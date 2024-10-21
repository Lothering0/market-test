import { Module } from '@nestjs/common';
import { ConfigDynamicModule } from './config/config.dynamic-module';
import { PostgresModule } from './postgres/postgres.module';
import { ApiModule } from './api/api.module';

@Module({
  imports: [ConfigDynamicModule, PostgresModule, ApiModule],
})
export class InfrastructureModule {}
