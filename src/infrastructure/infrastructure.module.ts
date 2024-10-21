import { Module } from '@nestjs/common';
import { ConfigDynamicModule } from './config/config.dynamic-module';
import { PostgresModule } from './postgres/postgres.module';
import { ApiModule } from './api/api.module';
import { CacheDynamicModule } from './cache/cache.dynamic-module';

@Module({
  imports: [ConfigDynamicModule, PostgresModule, ApiModule, CacheDynamicModule],
})
export class InfrastructureModule {}
