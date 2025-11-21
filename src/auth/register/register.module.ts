import { Module } from '@nestjs/common';
import { MailModule } from '../../libs/mail';
import { RegisterService } from './register.service';
import { UserService } from '../../user';
import { SessionService } from '../../session';
import { EmailConfirmationService } from '../email-confirmation';

@Module({
  imports: [MailModule],
  providers: [
    RegisterService,
    UserService,
    SessionService,
    EmailConfirmationService,
  ],
})
export class RegisterModule {}
