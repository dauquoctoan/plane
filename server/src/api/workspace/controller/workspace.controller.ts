import { Controller, Get, Post, Body, Patch, Delete, Param, Request as RequestNest, UseGuards } from '@nestjs/common';
import { Request } from 'express'
import { WorkspaceService } from '../service/workspace.service';
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { CreateWorkspaceDto, UpdateWorkspaceDto } from '../dto/Workspace.dto';
import { handleResultError, handleResultSuccess } from 'src/helper/handleresult';
import { UserService } from 'src/api/user/service/user.service';
import { UpdateUserDto } from 'src/api/user/dto/User.dto';
import { IAuthRequest } from 'src/types/auth.types';
import { messageCreateFail } from 'src/helper/message.create';
import { AuthGuard } from 'src/Guards/auth.guard';
import { WorkspaceMember } from '../entitys/WorkspaceMember.entity';


@Controller('workspace')
@ApiTags('Workspace')
@ApiBearerAuth('access-token')
export class WorkspaceController {
  constructor(private readonly workspaceService: WorkspaceService) { }

  @UseGuards(AuthGuard)
  @Post()
  async createWorkSpace(@Body() createWorkspaceDto: CreateWorkspaceDto, @RequestNest() request: IAuthRequest) {
    return handleResultSuccess(await this.workspaceService.createWorkspace(request.user.id, createWorkspaceDto))
  }

  @UseGuards(AuthGuard)
  @Get()
  async findAllWorkSpace(@RequestNest() request: IAuthRequest) {
    return handleResultSuccess(await this.workspaceService.findWorkspaceAndUser(request.user.id));
  }

  // @UseGuards(AuthGuard)
  // @Get("test")
  // async test(@RequestNest() request: IAuthRequest) {
  //   return handleResultSuccess(await this.workspaceService.findAll({include:[
  //     {
  //       model: WorkspaceMember,
  //       as
  //       required: true,
  //       where: {
  //         memberId: request.user.id, 
  //       },
  //     },
  //   ]}));
  // }

  @UseGuards(AuthGuard)
  @Get("workspaces-by-user")
  async findOneWorkSpace(@RequestNest() request: IAuthRequest) {
    return handleResultSuccess(await this.workspaceService.findWorkspaceByUser(request.user.id));
  }

  @Patch(":id")
  updateWorkSpace(@Param('id') id: string, @Body() updateWorkspaceDto: UpdateWorkspaceDto) {
    return handleResultSuccess(this.workspaceService.updateById(id, updateWorkspaceDto));
  }

  @Delete(":id")
  removeWorkSpace(@Param('id') id: string) {
    return handleResultSuccess(this.workspaceService.removeById(id));
  }
}
