

import { Controller, Post, Body, Get, Param, Patch, Delete, UseGuards, Session, Request as RequestNest } from '@nestjs/common';
import { UserService } from '../service/User.service';
import { CreateUserDto, UpdateUserDto } from '../dto/User.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/Guards/auth.guard';
import { WorkspaceService } from 'src/api/workspace/service/workspace.service';
import { Request } from 'express';
import { extractTokenFromHeader } from 'src/helper/token';
import { JwtService } from '@nestjs/jwt';
import { handleResultSuccess } from 'src/helper/handleresult';


@Controller('/me')
@ApiTags('Me')
@ApiBearerAuth('access-token')
export class MeController {
    constructor(
        private readonly userService: UserService,
        private readonly workspaceService: WorkspaceService,
        private jwtService: JwtService
    ) { }

    @UseGuards(AuthGuard)
    @Get()
    async findAllWorkSpaceAndUserAndIssue(@RequestNest() request: Request) {
        const token = extractTokenFromHeader(request);
        const info = this.jwtService.decode(token);
        const user = await this.userService.findOneById(info['payload'].id, false)
        const workspace = await this.workspaceService.findOne({ where: { owner: info['payload'].id } }, false)
        return handleResultSuccess({ user, workspace });
    }

    @Get('count/:count')
    async count(@Param('count') count: number) {
        const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
        await delay(1000)
        return + count + 1;
    }
}
