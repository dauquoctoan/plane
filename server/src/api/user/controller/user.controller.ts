import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { UserService } from '../service/User.service';
import { CreateUserDto, UpdateUserDto } from '../dto/User.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('user')
@ApiTags('user')
export class UserController {
    constructor(private readonly workspaceService: UserService) { }
    @Post()
    create(@Body() createWorkspaceDto: CreateUserDto) {
        return this.workspaceService.create(createWorkspaceDto);
    }

    @Get()
    findAll() {
        return this.workspaceService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.workspaceService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateWorkspaceDto: UpdateUserDto) {
        return this.workspaceService.updateById(+id, updateWorkspaceDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.workspaceService.removeById(+id);
    }
}
