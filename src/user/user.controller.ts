import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  ParseUUIDPipe,
  HttpStatus,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly usersService: UserService) {}

  @Post('')
  async create(@Body() createUserDto: CreateUserDto) {
    return {
      data: await this.usersService.CreateUser(createUserDto),
      statusCode: HttpStatus.CREATED,
      message: 'success create user',
    };
  }

  @Get('')
  async getAllUser() {
    const data = await this.usersService.getAll();

    return {
      data: data,
      statusCode: HttpStatus.OK,
      message: 'success get user',
    };
  }

  @Put(':id')
  async updateUser(
    @Param('id', ParseUUIDPipe) id: string,
    updateUser: UpdateUserDto,
  ) {
    return {
      data: await this.usersService.updateUser(id, updateUser),
      statusCode: HttpStatus.OK,
      message: 'success update user',
    };
  }

  @Delete(':id')
  async deleteUser(@Param('id', ParseUUIDPipe) id: string) {
    return {
      data: await this.usersService.DeleteUser(id),
      statusCode: HttpStatus.OK,
      message: 'success delete user',
    };
  }
}
function Public() {
  throw new Error('Function not implemented.');
}
