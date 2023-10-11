import { Controller, Get, Post, Body, Param, Patch, Delete, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProjectMemberInviteService } from '../service/ProjectMemberInvite.service';
import { CreateProjectMemberInviteDto, UpdateProjectMemberInviteDto } from '../dto/ProjectMemberInvite.dto';

@Controller('project-member-invite')
@ApiTags('Project Member Invite')
export class ProjectMemberInviteController {
    constructor(private readonly projectMemberInviteService: ProjectMemberInviteService) { }
    @Post()
    create(@Body() project: CreateProjectMemberInviteDto) {
        return this.projectMemberInviteService.create(project);
    }

    @Get()
    findAllprojectMemberInvite() {
        return this.projectMemberInviteService.findAll();
    }

    @Get(':id')
    findOneprojectMemberInvite(@Param('id') id: string) {
        return this.projectMemberInviteService.findOne(+id);
    }

    @Patch(':id')
    updateprojectMemberInvite(@Param('id') id: string, @Body() project: UpdateProjectMemberInviteDto) {
        return this.projectMemberInviteService.updateById(+id, project);
    }

    @Delete(':id')
    removeprojectMemberInvite(@Param("id") id?: string) {
        return this.projectMemberInviteService.removeById(+id);
    }
}
