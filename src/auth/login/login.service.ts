import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';

import { SessionService } from '../../session/session.service';
import { UserService } from '../../user/user.service';
import { LoginDto } from '../dto';

import { verify } from 'argon2';

@Injectable()
export class LoginService {
  public constructor(
    private readonly userService: UserService,
    private readonly sessionService: SessionService,
  ) {}

  public async login(dto: LoginDto) {
    const user = await this.userService.findByLogin(dto.login);

    if (!user || !user.password) {
      throw new NotFoundException(`User ${dto.login} not found`);
    }

    const isValidPassword = await verify(user.password, dto.password);

    if (!isValidPassword) {
      throw new UnauthorizedException(
        'Wrong password. Try again or reset your pasword',
      );
    }

    return {
      accessToken: await this.sessionService.encrypt({
        sub: user.id,
        login: user.login,
        email: user.email,
        role: user.role,
      }),
    };
  }
}
