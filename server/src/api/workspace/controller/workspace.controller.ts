import { Controller, Get, Post, Body, Patch, Delete, Param, Request as RequestNest, UseGuards } from '@nestjs/common';
import { Request } from 'express'
import { WorkspaceService } from '../service/workspace.service';
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { CreateWorkspaceDto, UpdateWorkspaceDto } from '../dto/Workspace.dto';
import { handleResultError, handleResultSuccess } from 'src/helper/handleresult';
import { UserService } from 'src/api/user/service/User.service';
import { UpdateUserDto } from 'src/api/user/dto/User.dto';
import { IAuthRequest } from 'src/types/auth.types';
import { messageCreateFail } from 'src/helper/message.create';
import { AuthGuard } from 'src/Guards/auth.guard';


@Controller()
@ApiTags('Workspace')
@ApiBearerAuth('access-token')
export class WorkspaceController {
  constructor(private readonly workspaceService: WorkspaceService, private readonly userService: UserService) { }

  @UseGuards(AuthGuard)
  @Post()
  async createWorkSpace(@Body() createWorkspaceDto: CreateWorkspaceDto, @RequestNest() request: IAuthRequest) {
    const workspace = await this.workspaceService.create(createWorkspaceDto);
    if (workspace) {
      await this.userService.updateById(request.user.id, { last_workspace_id: workspace.id });
      return handleResultSuccess(workspace);
    }
    handleResultError({ message: messageCreateFail('workspace'), data: null, statusCode: 500 })
  }

  @Get()
  async findAllWorkSpace(@RequestNest() request: IAuthRequest) {
    return handleResultSuccess(await this.workspaceService.findWorkspaceAndUser(request.user.id));
  }

  @Get(":id")
  findOneWorkSpace(@Param('id') id: string) {
    return handleResultSuccess(this.workspaceService.findOneById(+id));
  }

  @Patch(":id")
  updateWorkSpace(@Param('id') id: string, @Body() updateWorkspaceDto: UpdateWorkspaceDto) {
    return handleResultSuccess(this.workspaceService.updateById(+id, updateWorkspaceDto));
  }

  @Delete(":id")
  removeWorkSpace(@Param('id') id: string) {
    return handleResultSuccess(this.workspaceService.removeById(+id));
  }
}
