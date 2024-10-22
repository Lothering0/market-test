import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { UsersRepository } from 'src/repositories/users.repository';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly usersRepository: UsersRepository) {}

  async canActivate(context: ExecutionContext) {
    const { accessToken, userId } = this.getDataFromContext(context);
    await this.verifyUser(accessToken, userId);
    return true;
  }

  private getDataFromContext(context: ExecutionContext) {
    const accessToken = this.getAccessTokenFromContext(context);
    const userId = this.getUserIdFromContext(context);
    return { accessToken, userId };
  }

  private getUserIdFromContext(context: ExecutionContext) {
    const request = this.getRequestFromContext(context);
    const userId = request.headers['x-user-id'] ?? 0;
    return Number(userId);
  }

  private getAccessTokenFromContext(context: ExecutionContext) {
    const request = this.getRequestFromContext(context);
    return request.cookies?.access_token;
  }

  private getRequestFromContext(context: ExecutionContext) {
    return context.switchToHttp().getRequest<Request>();
  }

  private async verifyUser(accessToken: string, userId: number) {
    if (!userId) {
      throw new HttpException('X-User-Id header must be sent', HttpStatus.BAD_REQUEST);
    }

    const isTokenValid = await this.usersRepository.isAccessTokenValid(accessToken, userId);

    if (!isTokenValid) {
      throw new UnauthorizedException();
    }
  }
}
