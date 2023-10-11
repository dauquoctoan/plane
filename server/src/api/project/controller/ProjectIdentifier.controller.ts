import { Controller, Get, Post, Body, Param, Patch, Delete, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProjectIdentifierService } from '../service/ProjectIdentifier.service';
import { CreateProjectIdentifierDto, UpdateProjectIdentifierDto } from '../dto/ProjectIdentifier.dto';


@Controller('project-identifier')
@ApiTags('Project Identifier')
export class ProjectIdentifierController {
    constructor(private readonly projectIdentifierService: ProjectIdentifierService) { }
    @Post()
    create(@Body() project: CreateProjectIdentifierDto) {
        return this.projectIdentifierService.create(project);
    }

    @Get()
    findAllProjectIdentifier() {
        return this.projectIdentifierService.findAll();
    }

    @Get(':id')
    findOneProjectIdentifier(@Param('id') id: string) {
        return this.projectIdentifierService.findOne(+id);
    }

    @Patch(':id')
    updateProjectIdentifier(@Param('id') id: string, @Body() project: UpdateProjectIdentifierDto) {
        return this.projectIdentifierService.updateById(+id, project);
    }

    @Delete(':id')
    removeProjectIdentifier(@Param("id") id?: string) {
        return this.projectIdentifierService.removeById(+id);
    }
}
