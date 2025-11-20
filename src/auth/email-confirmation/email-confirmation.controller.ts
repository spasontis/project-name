import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { EmailDto, VerifyDto } from '../dto';

import { EmailConfirmationService } from './email-confirmation.service';

@ApiTags('Email confirmation')
@Controller('email-confirmation')
export class EmailConfirmationController {
  public constructor(
    private readonly emailConfirmationService: EmailConfirmationService,
  ) {}

  @Post('send-code')
  public async sendCode(@Body() dto: EmailDto) {
    await this.emailConfirmationService.generateVerificationToken(dto.email);
    await this.emailConfirmationService.sendVerificationToken(dto.email);
    return { message: 'Verification code is sended to email.' };
  }

  @Post('verify')
  public async verifyEmail(@Body() dto: VerifyDto) {
    await this.emailConfirmationService.isVerificationTokenMatch(dto);
    return { message: 'Successfuly verified' };
  }
}
