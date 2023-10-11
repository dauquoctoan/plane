import { Controller, Get, Post, Body, Param, Patch, Delete, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProjectDeployBoardService } from '../service/ProjectDeployBoard.service';
import { CreateProjectDeployBoardDto, UpdateProjectDeployBoardDto } from '../dto/ProjectDeployBoard.dto';

@Controller('project-deploy-board')
@ApiTags('Project Deploy Board')
export class ProjectDeployBoardController {
    constructor(private readonly workspaceService: ProjectDeployBoardService) { }
    @Post()
    create(@Body() project: CreateProjectDeployBoardDto) {
        return this.workspaceService.create(project);
    }

    @Get()
    findAllProjectDeployBoard() {
        return this.workspaceService.findAll();
    }

    @Get(':id')
    findOneProjectDeployBoard(@Param('id') id: string) {
        return this.workspaceService.findOne(+id);
    }

    @Patch(':id')
    updateProjectDeployBoard(@Param('id') id: string, @Body() project: UpdateProjectDeployBoardDto) {
        return this.workspaceService.updateById(+id, project);
    }

    @Delete(':id')
    removeProjectDeployBoard(@Param("id") id?: string) {
        return this.workspaceService.removeById(+id);
    }
}
