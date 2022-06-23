import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { Prisma, Role } from '@prisma/client';
import {
  GetUser,
  Public,
  Roles,
} from 'src/common/decorators';

@Controller('users')
export class UserController {
  constructor(
    private readonly _userService: UserService,
  ) {}

  @Roles(Role.ADMIN, Role.SUPERADMIN)
  @Post()
  create(
    @Body() dto: Prisma.UserUncheckedCreateInput,
  ) {
    return this._userService.create(dto);
  }

  @Public()
  @Get()
  findAll() {
    return this._userService.findAll();
  }

  @Public()
  // @Get(':id')
  // findOne(
  //   // @GetUser('id')
  //   id: number,
  // ) {
  //   return this._userService.findOne({
  //     id: id,
  //   });
  // }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this._userService.findOne({ id: +id });
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() dto: Prisma.UserUpdateInput,
  ) {
    return this._userService.update(
      { id: +id },
      dto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this._userService.remove({ id: +id });
  }
}
