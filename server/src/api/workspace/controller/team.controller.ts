import { Controller, Get, Post, Body, Patch, Delete, Query, Param } from '@nestjs/common';
import { ApiTags } from "@nestjs/swagger";
import { CreateTeamDto, UpdateTeamDto } from '../dto/Team.dto';
import { TeamService } from '../service/Team.service';

@Controller('team')
@ApiTags('Team')
export class TeamController {
    constructor(private readonly teamService: TeamService) { }
    @Post()
    create(@Body() team: CreateTeamDto) {
        return this.teamService.create(team);
    }

    @Get()
    findAll() {
        return this.teamService.findAll();
    }

    @Get(":id")
    findOne(@Param('id') id: string) {
        return this.teamService.findOneById(+id);
    }

    @Patch(":id")
    update(@Param('id') id: string, @Body() team: UpdateTeamDto) {
        return this.teamService.updateById(+id, team);
    }

    @Delete(":id")
    remove(@Param('id') id: string) {
        return this.teamService.removeById(+id);
    }
}
