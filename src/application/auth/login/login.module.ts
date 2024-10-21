import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';

@Module({
  providers: [LoginController, LoginService],
  controllers: [LoginController],
  exports: [LoginController],
})
export class LoginModule {}
