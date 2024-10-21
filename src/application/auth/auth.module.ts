import { Global, Module } from '@nestjs/common';
import { LoginModule } from './login/login.module';
import { AuthGuard } from './auth.guard';
import { ChangePasswordModule } from './change-password/change-password.module';

@Global()
@Module({
  imports: [LoginModule, ChangePasswordModule],
  providers: [AuthGuard],
  exports: [AuthGuard],
})
export class AuthModule {}
