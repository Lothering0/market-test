import { Module } from '@nestjs/common';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { ApplicationModule } from './application/application.module';
import { MigrationsModule } from './migrations/migrations.module';

@Module({
  imports: [InfrastructureModule, ApplicationModule, MigrationsModule],
})
export class AppModule {}
