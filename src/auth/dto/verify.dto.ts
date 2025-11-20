import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class VerifyDto {
  @ApiProperty({
    example: 'email',
    description: 'User email',
  })
  @IsNotEmpty({ message: 'Email is required' })
  @IsEmail({}, { message: 'Must be a valid email' })
  email: string;

  @ApiProperty({
    example: 'token',
    description: 'Email token',
  })
  @IsNotEmpty({ message: 'Token is required' })
  token: string;
}
