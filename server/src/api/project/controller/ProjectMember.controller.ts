import { Controller, Get, Post, Body, Param, Patch, Delete, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProjectMemberService } from '../service/ProjectMember.service';
import { CreateProjectMemberDto, UpdateProjectMemberDto } from '../dto/ProjectMember.dto';
import { handleResultSuccess } from 'src/helper/handleresult';


@Controller('project-member')
@ApiTags('Project Member')
export class ProjectMemberController {
    constructor(private readonly projectMemberService: ProjectMemberService) { }
    @Post()
    create(@Body() project: CreateProjectMemberDto) {
        return handleResultSuccess(this.projectMemberService.create(project));
    }

    @Get()
    findAllprojectMember() {
        return handleResultSuccess(this.projectMemberService.findAll());
    }

    @Get(':id')
    findOneprojectMember(@Param('id') id: string) {
        return handleResultSuccess(this.projectMemberService.findOneById(id));
    }

    @Patch(':id')
    updateprojectMember(@Param('id') id: string, @Body() project: UpdateProjectMemberDto) {
        return handleResultSuccess(this.projectMemberService.updateById(id, project));
    }

    @Delete(':id')
    removeprojectMember(@Param("id") id?: string) {
        return handleResultSuccess(this.projectMemberService.removeById(id));
    }
}
