import { Controller, Get, Post, Body, Patch, Delete, Query, Param } from '@nestjs/common';
import { ApiTags } from "@nestjs/swagger";
import { CreateTeamMemberDto, UpdateTeamMemberDto } from '../dto/TeamMember.dto';
import { TeamMemberService } from '../service/TeamMember.service';

@Controller('team-member')
@ApiTags('Team Member')
export class TeamMemberController {
    constructor(private readonly TeamMemBerService: TeamMemberService) { }
    @Post()
    createTeamMember(@Body() team: CreateTeamMemberDto) {
        return this.TeamMemBerService.create(team);
    }

    @Get()
    findAllTeamMember() {
        return this.TeamMemBerService.findAll();
    }

    @Get(':id')
    findOneTeamMember(@Query('id') id: string) {
        return this.TeamMemBerService.findOne(+id);
    }

    @Patch(':id')
    updateTeamMember(@Query('id') id: string, @Body() team: UpdateTeamMemberDto) {
        return this.TeamMemBerService.updateById(+id, team);
    }

    @Delete(':id')
    removeTeamMember(@Param("id") id?: string) {
        return this.TeamMemBerService.removeById(+id);
    }
}
