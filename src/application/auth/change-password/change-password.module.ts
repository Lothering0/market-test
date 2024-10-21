import { Module } from '@nestjs/common';
import { ChangePasswordController } from './change-password.controller';
import { ChangePasswordService } from './change-password.service';
import { LoginModule } from '../login/login.module';

@Module({
  imports: [LoginModule],
  providers: [ChangePasswordService],
  controllers: [ChangePasswordController],
})
export class ChangePasswordModule {}
