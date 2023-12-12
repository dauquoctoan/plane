import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProjectPublicMemberService } from '../service/ProjectPublicMember.service';
import { CreateProjectPublicMemberDto, UpdateProjectPublicMemberDto } from '../dto/ProjectPublicMember.dto';
import { handleResultSuccess } from 'src/helper/handleresult';

@Controller('project-public-member')
@ApiTags('ProjectPublicMember')
export class ProjectPublicMemberController {
    constructor(private readonly projectPublicMemberService: ProjectPublicMemberService) { }
    @Post()
    create(@Body() project: CreateProjectPublicMemberDto) {
        return handleResultSuccess(this.projectPublicMemberService.create(project));
    }

    @Get()
    findAllProjectPublicMember() {
        return handleResultSuccess(this.projectPublicMemberService.findAll());
    }

    @Get(':id')
    findOneProjectPublicMember(@Param('id') id: string) {
        return handleResultSuccess(this.projectPublicMemberService.findOneById(id));
    }

    @Patch(':id')
    updateProjectPublicMember(@Param('id') id: string, @Body() project: UpdateProjectPublicMemberDto) {
        return handleResultSuccess(this.projectPublicMemberService.updateById(id, project));
    }

    @Delete(':id')
    removeProjectPublicMember(@Param("id") id?: string) {
        return handleResultSuccess(this.projectPublicMemberService.removeById(id));
    }
}
