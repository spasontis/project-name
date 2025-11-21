import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { UserService } from '../../user';
import { SessionService } from '../../session';

@Module({
  providers: [LoginService, UserService, SessionService],
})
export class LoginModule {}
