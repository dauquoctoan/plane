

import { Controller, Get, UseGuards, Request as RequestNest, UnauthorizedException, Patch, Body } from '@nestjs/common';
import { UserService } from '../service/User.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/Guards/auth.guard';
import { handleResultSuccess } from 'src/helper/handleresult';
import { Workspace } from 'src/api/workspace/entitys/Workspace.entity';
import { UpdateUserDto } from '../dto/User.dto';
import { IAuthRequest } from 'src/types/auth.types';

@Controller('/me')
@ApiTags('Me')
@ApiBearerAuth('access-token')
export class MeController {
    constructor(
        private readonly userService: UserService,
    ) { }

    @UseGuards(AuthGuard)
    @Get()
    async findAllWorkSpaceAndUserAndIssue(@RequestNest() request: IAuthRequest) {
        const user = await this.userService.findOne({ where: { id: request.user.id }, include: [{ model: Workspace, as: 'workspace' }] });
        if (user) return handleResultSuccess(user);
        else throw new UnauthorizedException();
    }

    @UseGuards(AuthGuard)
    @Patch()
    update(@Body() updateUserDto: UpdateUserDto, @RequestNest() request: IAuthRequest) {
        return handleResultSuccess(this.userService.updateById(request.user.id, updateUserDto));
    }
}
