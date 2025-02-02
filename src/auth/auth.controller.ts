import { Controller, Post, HttpStatus, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserLoginDto } from './dto/user-login.dto';
import { UserService } from '../user/user.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Post('login')
  async Login(@Body() loginUserDto: UserLoginDto) {
    return {
      statusCode: HttpStatus.OK,
      message: 'Login Successful',
      data: await this.authService.login(loginUserDto),
    };
  }

  @Post('register')
  async Register() {
    const data = await this.authService.Register();
    return {
      data: data,
      statusCode: HttpStatus.OK,
      message: 'success to register',
    };
  }
}
