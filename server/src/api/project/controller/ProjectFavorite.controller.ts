import { Controller, Get, Post, Body, Param, Patch, Delete, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProjectFavoriteService } from '../service/ProjectFavorite.service';
import { CreateProjectFavoriteDto, UpdateProjectFavoriteDto } from '../dto/ProjectFavorite.dto';

@Controller('project-favorite')
@ApiTags('Project Favorite')
export class ProjectFavoriteController {
    constructor(private readonly projectFavoriteService: ProjectFavoriteService) { }
    @Post()
    create(@Body() project: CreateProjectFavoriteDto) {
        return this.projectFavoriteService.create(project);
    }

    @Get()
    findAllProjectFavorite() {
        return this.projectFavoriteService.findAll();
    }

    @Get(':id')
    findOneProjectFavorite(@Param('id') id: string) {
        return this.projectFavoriteService.findOneById(+id);
    }

    @Patch(':id')
    updateProjectFavorite(@Param('id') id: string, @Body() project: UpdateProjectFavoriteDto) {
        return this.projectFavoriteService.updateById(+id, project);
    }

    @Delete(':id')
    removeProjectFavorite(@Param("id") id?: string) {
        return this.projectFavoriteService.removeById(+id);
    }
}
