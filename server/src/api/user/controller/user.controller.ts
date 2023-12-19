import { Controller, Post, Body, Get, Param, Patch, Delete, UseGuards, Query, Request as RequestNest } from '@nestjs/common';
import { UserService } from '../service/User.service';
import { CreateUserDto, UpdateUserDto } from '../dto/User.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/Guards/auth.guard';
import { handleResultSuccess } from 'src/helper/handleresult';
import { IAuthRequest } from 'src/types/auth.types';
import { WorkspaceMember } from 'src/api/workspace/entitys/WorkspaceMember.entity';
import { ProjectMember } from 'src/api/project/entitys/ProjectMember.entity';


@Controller('user')
@ApiTags('User')
@ApiBearerAuth('access-token')
export class UserController {
    constructor(
        private readonly userService: UserService,
    ) { }

    @Post()
    create(@Body() createUserDto: CreateUserDto) {
        return handleResultSuccess(this.userService.create(createUserDto));
    }

    @UseGuards(AuthGuard)
    @Get()
    findAll() {
        return handleResultSuccess(this.userService.findAll());
    }

    @UseGuards(AuthGuard)
    @Get()
    findOne(@Query('id') id: string) {
        return handleResultSuccess(this.userService.findOneById(id));
    }

    @UseGuards(AuthGuard)
    @Patch()
    update(@Body() updateUserDto: UpdateUserDto, @RequestNest() request: IAuthRequest) {
        return handleResultSuccess(this.userService.updateById(request.user.id, updateUserDto));
    }

    @UseGuards(AuthGuard)
    @Delete(':id')
    remove(@Param('id') id: string) {
        return handleResultSuccess(this.userService.removeById(id));
    }
}
