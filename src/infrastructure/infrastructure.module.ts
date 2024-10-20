import { Global, Module } from '@nestjs/common';
import { ConfigDynamicModule } from './config/config.dynamic-module';
import { PostgresModule } from './postgres/postgres.module';

@Global()
@Module({
  imports: [ConfigDynamicModule, PostgresModule],
})
export class InfrastructureModule {}
