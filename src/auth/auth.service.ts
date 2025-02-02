import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserLoginDto } from './dto/user-login.dto';
import { UserService } from '../user/user.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Session } from './entity/session.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { hashPassword } from '../helper/hash_password';
import { v4 as uuid } from 'uuid';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Session)
    private sessionRepository: Repository<Session>,
    private jwtService: JwtService,
    private userService: UserService,
  ) {}

  async login(loginUserDto: UserLoginDto) {
    const { user } = await this.userService.findOneByEmail(loginUserDto.email);

    if (
      user.password !== (await hashPassword(loginUserDto.password, user.salt))
    ) {
      throw new HttpException(
        {
          statusCode: HttpStatus.NOT_FOUND,
          message: 'Incorrect Password',
        },
        HttpStatus.NOT_FOUND,
      );
    }

    if (!user.isActive) {
      throw new HttpException(
        {
          statusCode: HttpStatus.NOT_FOUND,
          message: 'Your account is not active',
        },
        HttpStatus.NOT_FOUND,
      );
    }

    const sessionData = new Session();

    sessionData.id = uuid();
    sessionData.user = user;
    sessionData.refresh_token = uuid();

    await this.sessionRepository.insert(sessionData);

    const payload = {
      email: user.email,
      username: user.username,
      sub: user.id,
    };

    return {
      username: user.username,
      access_token: this.jwtService.sign(payload),
      refresh_token: sessionData.refresh_token,
    };
  }

  async Register() {
    return { message: 'Register Testing' };
  }
}
