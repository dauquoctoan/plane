import { Controller, Get, Post, Body, Patch, Delete, Query, Param } from '@nestjs/common';
import { ApiTags } from "@nestjs/swagger";
import { CreateTeamDto } from '../dto/create-team.dto';
import { UpdateTeamDto } from '../dto/update-team.dto';
import { TeamService } from '../service/team.service';

@Controller('team')
@ApiTags('Team')
export class TeamController {
    constructor(private readonly workspaceService: TeamService) { }
    @Post()
    createWorkSpace(@Body() team: CreateTeamDto) {
        return this.workspaceService.createTeam(team);
    }

    @Get()
    findAllWorkSpace() {
        return this.workspaceService.findAllTeam();
    }

    @Get(":id")
    findOneWorkSpace(@Param('id') id: string) {
        console.log('sdfsdfsdf')
        return this.workspaceService.findOneTeam(+id);
    }

    @Patch(":id")
    updateWorkSpace(@Param('id') id: string, @Body() team: UpdateTeamDto) {
        return this.workspaceService.updateTeam(+id, team);
    }

    @Delete(":id")
    removeWorkSpace(@Param('id') id: string) {
        return this.workspaceService.removeTeam(+id);
    }
}
