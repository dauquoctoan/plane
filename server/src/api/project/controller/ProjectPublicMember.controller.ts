import { Controller, Get, Post, Body, Param, Patch, Delete, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProjectPublicMemberService } from '../service/ProjectPublicMember.service';
import { CreateProjectPublicMemberDto, UpdateProjectPublicMemberDto } from '../dto/ProjectPublicMember.dto';

@Controller('project-public-member')
@ApiTags('ProjectPublicMember')
export class ProjectPublicMemberController {
    constructor(private readonly projectPublicMemberService: ProjectPublicMemberService) { }
    @Post()
    create(@Body() project: CreateProjectPublicMemberDto) {
        return this.projectPublicMemberService.create(project);
    }

    @Get()
    findAllProjectPublicMember() {
        return this.projectPublicMemberService.findAll();
    }

    @Get(':id')
    findOneProjectPublicMember(@Param('id') id: string) {
        return this.projectPublicMemberService.findOneById(+id);
    }

    @Patch(':id')
    updateProjectPublicMember(@Param('id') id: string, @Body() project: UpdateProjectPublicMemberDto) {
        return this.projectPublicMemberService.updateById(+id, project);
    }

    @Delete(':id')
    removeProjectPublicMember(@Param("id") id?: string) {
        return this.projectPublicMemberService.removeById(+id);
    }
}
