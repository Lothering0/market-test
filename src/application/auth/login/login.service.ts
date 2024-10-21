import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { LoginDto } from './login.dto';
import { LoginRepository } from './login.repository';
import { User } from 'src/models/users/user.model';

const INVALID_CREDENTIALS_EXCEPTION = new HttpException('Invalid credentials', HttpStatus.BAD_REQUEST);

@Injectable()
export class LoginService {
  constructor(private readonly loginRepository: LoginRepository) {}

  async login(dto: LoginDto) {
    const user = await this.getUser(dto.email);
    this.verifyPassword(user, dto.password);
    return user.accessToken;
  }

  private async getUser(email: string) {
    const user = await this.loginRepository.getUserByEmail(email);

    if (!user) {
      throw INVALID_CREDENTIALS_EXCEPTION;
    }

    return user;
  }

  private verifyPassword(user: User, password: string) {
    const isPasswordValid = user.verifyPassword(password);

    if (!isPasswordValid) {
      throw INVALID_CREDENTIALS_EXCEPTION;
    }
  }
}
