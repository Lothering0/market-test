import { Global, Module } from '@nestjs/common';
import { LoginModule } from './login/login.module';
import { AuthGuard } from './auth.guard';
import { AuthRepository } from './auth.repository';

@Global()
@Module({
  imports: [LoginModule],
  providers: [AuthRepository, AuthGuard],
  exports: [AuthRepository, AuthGuard],
})
export class AuthModule {}
