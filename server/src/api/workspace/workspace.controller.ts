import { Controller, Get, Post, Body, Patch, Param, Delete,Query } from '@nestjs/common';
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

  @Post('create')
  createWorkSpace(@Body() createWorkspaceDto: CreateWorkspaceDto) {
    return this.workspaceService.createWorkSpace(createWorkspaceDto);
  }

  @Get('findAll')
  findAllWorkSpace() {
    return this.workspaceService.findAllWorkSpace();
  }

  @Get('findOne')
  findOneWorkSpace(@Query('id') id: string) {
    console.log('sdfsdfsdf')
    return this.workspaceService.findOneWorkSpace(+id);
  }

  @Patch('update')
  updateWorkSpace(@Query('id') id: string, @Body() updateWorkspaceDto: UpdateWorkspaceDto) {
    return this.workspaceService.updateWorkSpace(+id, updateWorkspaceDto);
  }

  @Delete('delete')
  removeWorkSpace(@Query('id') id: string) {
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

  @Get('team')
  findOneTeam(@Query('id') id: string) {
    return this.workspaceService.findOneTeam(+id);
  }

  @Patch('team')
  updateTeam(@Query('id') id: string, @Body() team: UpdateTeamDto) {
    return this.workspaceService.updateTeam(+id, team);
  }

  @Delete('team')
  removeTeam(@Query('id') id: string) {
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

  @Get('team-member')
  findOneTeamMember(@Query('id') id: string) {
    return this.workspaceService.findOneTeamMember(+id);
  }

  @Patch('team-member')
  updateTeamMember(@Query('id') id: string, @Body() team: UpdateTeamMemberDto) {
    return this.workspaceService.updateTeamMember(+id, team);
  }

  @Delete('team-member')
  removeTeamMember(@Query("member") member?:string, @Query("workspace") workspace?:string) {
    return this.workspaceService.removeTeamMember({member, workspace});
  }
}
