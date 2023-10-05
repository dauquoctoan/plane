import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WorkspaceService } from './workspace.service';
import {ApiTags} from "@nestjs/swagger";
import { CreateWorkspaceDto } from './dto/create-workspace.dto';
import { UpdateWorkspaceDto } from './dto/update-workspace.dto';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { CreateTeamMemberDto } from './dto/create-team-member.dto';
import { UpdateTeamMemberDto } from './dto/update-team-member.dto';

@Controller('workspace')
@ApiTags('workspace')
export class WorkspaceController {
  constructor(private readonly workspaceService: WorkspaceService) { }

  @Post()
  createWorkSpace(@Body() createWorkspaceDto: CreateWorkspaceDto) {
    return this.workspaceService.createWorkSpace(createWorkspaceDto);
  }

  @Get()
  findAllWorkSpace() {
    return this.workspaceService.findAllWorkSpace();
  }

  @Get(':id')
  findOneWorkSpace(@Param('id') id: string) {
    return this.workspaceService.findOneWorkSpace(+id);
  }

  @Patch(':id')
  updateWorkSpace(@Param('id') id: string, @Body() updateWorkspaceDto: UpdateWorkspaceDto) {
    return this.workspaceService.updateWorkSpace(+id, updateWorkspaceDto);
  }

  @Delete(':id')
  removeWorkSpace(@Param('id') id: string) {
    return this.workspaceService.removeWorkSpace(+id);
  }

  /* Team */

  @Post('team')
  createTeam(@Body() team: CreateTeamDto) {
    return this.workspaceService.createTeam(team);
  }

  @Get('team')
  findAllTeam() {
    return this.workspaceService.findAllTeam();
  }

  @Get('team:id')
  findOneTeam(@Param('id') id: string) {
    return this.workspaceService.findOneTeam(+id);
  }

  @Patch('team:id')
  updateTeam(@Param('id') id: string, @Body() team: UpdateTeamDto) {
    return this.workspaceService.updateTeam(+id, team);
  }

  @Delete('team:id')
  removeTeam(@Param('id') id: string) {
    return this.workspaceService.removeTeam(+id);
  }

  /* TeamMember */

  @Post('team-member')
  createTeamMember(@Body() team: CreateTeamMemberDto) {
    return this.workspaceService.createTeamMember(team);
  }

  @Get('team-member')
  findAllTeamMember() {
    return this.workspaceService.findAllTeamMember();
  }

  @Get('team-member:id')
  findOneTeamMember(@Param('id') id: string) {
    return this.workspaceService.findOneTeamMember(+id);
  }

  @Patch('team-member:id')
  updateTeamMember(@Param('id') id: string, @Body() team: UpdateTeamMemberDto) {
    return this.workspaceService.updateTeamMember(+id, team);
  }

  @Delete('team-member:id')
  removeTeamMember(@Param('id') id: string) {
    return this.workspaceService.removeTeamMember(+id);
  }
}
