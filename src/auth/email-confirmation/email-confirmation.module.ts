import { Module } from '@nestjs/common';

import { MailService } from '../../libs/mail/mail.service';
import { UserService } from '../../user/user.service';

import { EmailConfirmationService } from './email-confirmation.service';
import { EmailConfirmationController } from './email-confirmation.controller';

@Module({
  controllers: [EmailConfirmationController],
  providers: [EmailConfirmationService, MailService, UserService],
})
export class EmailConfirmationModule {}
