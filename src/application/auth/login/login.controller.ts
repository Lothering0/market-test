import { Body, Controller, Post, Res } from '@nestjs/common';
import { LoginDto } from './login.dto';
import { LoginService } from './login.service';
import { Response } from 'express';

@Controller('/login')
export class LoginController {
  constructor(private readonly authLoginService: LoginService) {}

  @Post()
  async login(@Body() dto: LoginDto, @Res({ passthrough: true }) response: Response) {
    const accessToken = await this.authLoginService.login(dto);
    response.cookie('access_token', accessToken);
  }
}
