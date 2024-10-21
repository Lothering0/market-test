import { Body, Controller, Post, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth.guard';
import { LoginController } from '../login/login.controller';
import { Response } from 'express';
import { ChangePasswordDto } from './change-password.dto';
import { ChangePasswordService } from './change-password.service';
import { LoginDto } from '../login/login.dto';

@Controller('/change-password')
@UseGuards(AuthGuard)
export class ChangePasswordController {
  constructor(
    private readonly loginController: LoginController,
    private readonly changePasswordService: ChangePasswordService,
  ) {}

  @Post()
  async changePassword(@Body() dto: ChangePasswordDto, @Res({ passthrough: true }) response: Response) {
    const loginDto = this.convertToLoginDto(dto);
    await this.loginController.login(loginDto, response);
    await this.changePasswordService.changePassword(dto);
  }

  private convertToLoginDto(dto: ChangePasswordDto): LoginDto {
    return {
      email: dto.email,
      password: dto.oldPassword,
    };
  }
}
