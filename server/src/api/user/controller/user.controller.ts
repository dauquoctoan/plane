import { Controller, Post, Body, Get, Param, Patch, Delete, UseGuards, Session, Query } from '@nestjs/common';
import { UserService } from '../service/User.service';
import { CreateUserDto, UpdateUserDto } from '../dto/User.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/Guards/auth.guard';
import { WorkspaceService } from 'src/api/workspace/service/workspace.service';
import { IssueService } from 'src/api/issue/service/issue.service';


@Controller()
@ApiTags('User')
@ApiBearerAuth('access-token')
export class UserController {
    constructor(
        private readonly userService: UserService,
    ) { }

    @Post()
    create(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto);
    }

    @UseGuards(AuthGuard)
    @Get()
    findAll(@Session() session: Record<string, any>) {
        return this.userService.findAll();
    }

    @Get()
    findOne(@Query('id') id: string) {
        return this.userService.findOneById(id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        return this.userService.updateById(+id, updateUserDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.userService.removeById(id);
    }
}
