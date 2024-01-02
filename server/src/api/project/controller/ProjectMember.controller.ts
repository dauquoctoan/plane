import { Controller, Get, Post, Body, Param, Patch, Delete, Request as RequestNest, UseGuards, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ProjectMemberService } from '../service/ProjectMember.service';
import { CreateProjectMemberDto, UpdateProjectMemberDto } from '../dto/ProjectMember.dto';
import { handleResultSuccess } from 'src/helper/handleresult';
import { IAuthRequest } from 'src/types/auth.types';
import { AuthGuard } from 'src/Guards/auth.guard';


@Controller('project-member')
@ApiTags('Project Member')
@ApiBearerAuth('access-token')
export class ProjectMemberController {
    constructor(private readonly projectMemberService: ProjectMemberService) { }
    @Post()
    async create(@Body() project: CreateProjectMemberDto) {
        return handleResultSuccess(await this.projectMemberService.create(project));
    }

    // @Get()
    // async findAllprojectMember() {
    //     return handleResultSuccess(await this.projectMemberService.findAll());
    // }

    @Get()
    @UseGuards(AuthGuard)
    async findOneprojects(@RequestNest() request: IAuthRequest, @Query() query: { projectId: string }) {
        return handleResultSuccess(await this.projectMemberService.findMembers(query, request.user.id));
    }

    @Get('me')
    @UseGuards(AuthGuard)
    async me(@RequestNest() request: IAuthRequest, @Query() query: { projectId: string }) {
        return handleResultSuccess(await this.projectMemberService.me(query, request.user.id));
    }

    @Patch(':id')
    async updateprojectMember(@Param('id') id: string, @Body() project: UpdateProjectMemberDto) {
        return handleResultSuccess(await this.projectMemberService.updateById(id, project));
    }

    @Delete(':id')
    async removeprojectMember(@Param("id") id?: string) {
        return handleResultSuccess(await this.projectMemberService.removeById(id));
    }
}
