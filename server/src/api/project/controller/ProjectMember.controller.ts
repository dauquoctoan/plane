import { Controller, Get, Post, Body, Param, Patch, Delete, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProjectMemberService } from '../service/ProjectMember.service';
import { CreateProjectMemberDto, UpdateProjectMemberDto } from '../dto/ProjectMember.dto';


@Controller('project-member')
@ApiTags('Project Member')
export class ProjectMemberController {
    constructor(private readonly projectMemberService: ProjectMemberService) { }
    @Post()
    create(@Body() project: CreateProjectMemberDto) {
        return this.projectMemberService.create(project);
    }

    @Get()
    findAllprojectMember() {
        return this.projectMemberService.findAll();
    }

    @Get(':id')
    findOneprojectMember(@Param('id') id: string) {
        return this.projectMemberService.findOneById(+id);
    }

    @Patch(':id')
    updateprojectMember(@Param('id') id: string, @Body() project: UpdateProjectMemberDto) {
        return this.projectMemberService.updateById(+id, project);
    }

    @Delete(':id')
    removeprojectMember(@Param("id") id?: string) {
        return this.projectMemberService.removeById(+id);
    }
}
