import { Controller, Get, Post, Body, Patch, Delete, Query } from '@nestjs/common';
import { ApiTags } from "@nestjs/swagger";
import { CreateTeamMemberDto } from '../dto/create-team-member.dto';
import { UpdateTeamMemberDto } from '../dto/update-team-member.dto';
import { TeamMemberService } from '../service/team-member.service';

@Controller('team-member')
@ApiTags('Team Member')
export class TeamMemberController {
    constructor(private readonly workspaceService: TeamMemberService) { }
    /* TeamMember */
    @Post('team-member')
    createTeamMember(@Body() team: CreateTeamMemberDto) {
        return this.workspaceService.createTeamMember(team);
    }

    @Get('team-member')
    findAllTeamMember() {
        return this.workspaceService.findAllTeamMember();
    }

    @Get(':id')
    findOneTeamMember(@Query('id') id: string) {
        return this.workspaceService.findOneTeamMember(+id);
    }

    @Patch(':id')
    updateTeamMember(@Query('id') id: string, @Body() team: UpdateTeamMemberDto) {
        return this.workspaceService.updateTeamMember(+id, team);
    }

    @Delete(':workspace:id')
    removeTeamMember(@Query("id") member?: string, @Query("workspace") workspace?: string) {
        return this.workspaceService.removeTeamMember({ member, workspace });
    }
}
