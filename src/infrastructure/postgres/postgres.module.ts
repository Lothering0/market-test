import { Module } from '@nestjs/common';
import { PostgresProvider } from './postgres.provider';

@Module({
  providers: [PostgresProvider],
})
export class PostgresModule {}
