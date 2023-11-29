import { Controller, Get, Post, Body, Param, Patch, Delete, Request as RequestNestjs, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ProjectService } from '../service/Project.service';
import { CreateProjectDto, UpdateProjectDto } from '../dto/Project.dto';
import { handleResultSuccess } from 'src/helper/handleresult';
import { IAuthRequest } from 'src/types/auth.types';
import { AuthGuard } from 'src/Guards/auth.guard';


@Controller('project')
@ApiTags('Project')
@ApiBearerAuth('access-token')
export class ProjectController {
    constructor(private readonly projectService: ProjectService) { }
    @Post()
    async create(@Body() project: CreateProjectDto) {
        return handleResultSuccess(await this.projectService.create({ ...project, network: +project.network || '' }));
    }

    @UseGuards(AuthGuard)
    @Get()
    async findAllProject() {
        return handleResultSuccess(await this.projectService.findAll());
    }

    @UseGuards(AuthGuard)
    @Get('by-id:id')
    findOneProject(@Param('id') id: string) {
        return handleResultSuccess(this.projectService.findOneById(+id));
    }

    @UseGuards(AuthGuard)
    @Get('by-user/:id')
    async findWorkSpaceByUserId(@Param('id') id: string, @RequestNestjs() request: IAuthRequest) {
        const result = await this.projectService.getProjectByUserId(request.user.id, id);
        return handleResultSuccess(result);
    }

    @Patch(':id')
    updateProject(@Param('id') id: string, @Body() project: UpdateProjectDto) {
        return handleResultSuccess(this.projectService.updateById(+id, project));
    }

    @Delete(':id')
    removeProject(@Param("id") id?: string) {
        return handleResultSuccess(this.projectService.removeById(+id));
    }
}
