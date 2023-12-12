import { Controller, Get, Post, Body, Param, Patch, Delete, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProjectIdentifierService } from '../service/ProjectIdentifier.service';
import { CreateProjectIdentifierDto, UpdateProjectIdentifierDto } from '../dto/ProjectIdentifier.dto';
import { handleResultSuccess } from 'src/helper/handleresult';


@Controller('project-identifier')
@ApiTags('Project Identifier')
export class ProjectIdentifierController {
    constructor(private readonly projectIdentifierService: ProjectIdentifierService) { }
    @Post()
    create(@Body() project: CreateProjectIdentifierDto) {
        return handleResultSuccess(this.projectIdentifierService.create(project));
    }

    @Get()
    findAllProjectIdentifier() {
        return handleResultSuccess(this.projectIdentifierService.findAll());
    }

    @Get(':id')
    findOneProjectIdentifier(@Param('id') id: string) {
        return handleResultSuccess(this.projectIdentifierService.findOneById(id));
    }

    @Patch(':id')
    updateProjectIdentifier(@Param('id') id: string, @Body() project: UpdateProjectIdentifierDto) {
        return handleResultSuccess(this.projectIdentifierService.updateById(id, project));
    }

    @Delete(':id')
    removeProjectIdentifier(@Param("id") id?: string) {
        return handleResultSuccess(this.projectIdentifierService.removeById(id));
    }
}
