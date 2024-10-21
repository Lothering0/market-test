import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';
import { UsersRepository } from 'src/repositories/users.repository';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly usersRepository: UsersRepository) {}

  async canActivate(context: ExecutionContext) {
    const accessToken = this.getAccessTokenFromContext(context);
    await this.verifyAccessToken(accessToken);
    return true;
  }

  private getAccessTokenFromContext(context: ExecutionContext) {
    const request = this.getRequestFromContext(context);
    return request.cookies?.access_token;
  }

  private getRequestFromContext(context: ExecutionContext) {
    return context.switchToHttp().getRequest<Request>();
  }

  private async verifyAccessToken(accessToken: string) {
    const isTokenValid = await this.usersRepository.isAccessTokenValid(accessToken);

    if (!isTokenValid) {
      throw new UnauthorizedException();
    }
  }
}
