import { Global, Module } from '@nestjs/common';
import { PostgresProvider } from './postgres.provider';

@Global()
@Module({
  providers: [PostgresProvider],
  exports: [PostgresProvider],
})
export class PostgresModule {}
