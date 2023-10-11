import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProjectService } from '../service/Project.service';
import { CreateProjectDto, UpdateProjectDto } from '../dto/Project.dto';


@Controller('project')
@ApiTags('Project')
export class ProjectController {
    constructor(private readonly projectService: ProjectService) { }
    @Post()
    create(@Body() project: CreateProjectDto) {
        return this.projectService.create(project);
    }

    @Get()
    findAllProject() {
        return this.projectService.findAll();
    }

    @Get(':id')
    findOneProject(@Param('id') id: string) {
        return this.projectService.findOne(+id);
    }

    @Patch(':id')
    updateProject(@Param('id') id: string, @Body() project: UpdateProjectDto) {
        return this.projectService.updateById(+id, project);
    }

    @Delete(':id')
    removeProject(@Param("id") id?: string) {
        return this.projectService.removeById(+id);
    }
}
