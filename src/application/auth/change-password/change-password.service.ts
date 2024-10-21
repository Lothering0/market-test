import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ChangePasswordDto } from './change-password.dto';
import { UsersRepository } from 'src/repositories/users.repository';

@Injectable()
export class ChangePasswordService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async changePassword(dto: ChangePasswordDto) {
    const user = await this.usersRepository.getUserByEmail(dto.email);

    if (!user) {
      throw new HttpException('Invalid credentials', HttpStatus.BAD_REQUEST);
    }

    const isNewPasswordValid = user.validatePassword(dto.newPassword);

    if (!isNewPasswordValid) {
      throw new HttpException('Password must be at least 8 characters', HttpStatus.BAD_REQUEST);
    }

    user.setPassword(dto.newPassword);
    this.usersRepository.update(user);
  }
}
