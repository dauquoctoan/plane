import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProjectMemberService } from '../service/ProjectMember.service';
import { CreateProjectMemberDto, UpdateProjectMemberDto } from '../dto/ProjectMember.dto';
import { handleResultSuccess } from 'src/helper/handleresult';


@Controller('project-member')
@ApiTags('Project Member')
export class ProjectMemberController {
    constructor(private readonly projectMemberService: ProjectMemberService) { }
    @Post()
    async create(@Body() project: CreateProjectMemberDto) {
        return handleResultSuccess(await this.projectMemberService.create(project));
    }

    @Get()
    async findAllprojectMember() {
        return handleResultSuccess(await this.projectMemberService.findAll());
    }

    @Get(':id')
    async findOneprojectMember(@Param('id') id: string) {
        return handleResultSuccess(await this.projectMemberService.findMemberByProject(id));
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
