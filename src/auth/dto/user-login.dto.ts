import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UserLoginDto {
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
