import { Controller, Get, Post, Body, Patch, Delete, Query } from '@nestjs/common';
import { ApiTags } from "@nestjs/swagger";
import { CreateTeamMemberDto, UpdateTeamMemberDto } from '../dto/TeamMember.dto';
import { TeamMemberService } from '../service/TeamMember.service';

@Controller('team-member')
@ApiTags('Team Member')
export class TeamMemberController {
    constructor(private readonly TeamMemBerService: TeamMemberService) { }
    @Post()
    createTeamMember(@Body() team: CreateTeamMemberDto) {
        return this.TeamMemBerService.createTeamMember(team);
    }

    @Get()
    findAllTeamMember() {
        return this.TeamMemBerService.findAllTeamMember();
    }

    @Get(':id')
    findOneTeamMember(@Query('id') id: string) {
        return this.TeamMemBerService.findOneTeamMember(+id);
    }

    @Patch(':id')
    updateTeamMember(@Query('id') id: string, @Body() team: UpdateTeamMemberDto) {
        return this.TeamMemBerService.updateTeamMember(+id, team);
    }

    @Delete(':id')
    removeTeamMember(@Query("id") member?: string, @Query("workspace") workspace?: string) {
        return this.TeamMemBerService.removeTeamMember({ member, workspace });
    }
}
