import { Module } from '@nestjs/common';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { ApplicationModule } from './application/application.module';
import { MigrationsModule } from './migrations/migrations.module';
import { RepositoriesModule } from './repositories/repositories.module';

@Module({
  imports: [InfrastructureModule, RepositoriesModule, ApplicationModule, MigrationsModule],
})
export class AppModule {}
