import { Controller, Get, Post, Body, Param, Patch, Delete, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProjectDeployBoardService } from '../service/ProjectDeployBoard.service';
import { CreateProjectDeployBoardDto, UpdateProjectDeployBoardDto } from '../dto/ProjectDeployBoard.dto';

@ApiTags('Project Deploy Board')
@Controller('project-deploy-board')
export class ProjectDeployBoardController {
    constructor(private readonly workspaceService: ProjectDeployBoardService) { }
    @Post()
    create(@Body() team: CreateProjectDeployBoardDto) {
        return this.workspaceService.create(team);
    }

    @Get()
    findAllTeamMember() {
        return this.workspaceService.findAll();
    }

    @Get(':id')
    findOneTeamMember(@Param('id') id: string) {
        return this.workspaceService.findOne(+id);
    }

    @Patch(':id')
    updateTeamMember(@Param('id') id: string, @Body() team: UpdateProjectDeployBoardDto) {
        return this.workspaceService.updateById(+id, team);
    }

    @Delete(':id')
    removeTeamMember(@Param("id") id?: string) {
        return this.workspaceService.removeById(+id);
    }
}
