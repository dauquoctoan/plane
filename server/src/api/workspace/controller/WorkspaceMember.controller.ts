import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Delete,
  Query,
  Param,
  Request as RequestNestjs,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import {
  CreateWorkspaceMemberDtoWidthToken,
  UpdateWorkspaceMemberDto,
} from '../dto/WorkspaceMember.dto';
import { WorkspaceMemberService } from '../service/WorkspaceMember.service';
import { handleResultSuccess } from 'src/helper/handleresult';
import { IAuthRequest } from 'src/types/auth.types';
import { AuthGuard } from 'src/Guards/auth.guard';

@Controller('workspace-member')
@ApiTags('Workspace Member')
@ApiBearerAuth('access-token')
export class WorkspaceMemberController {
  constructor(
    private readonly workspaceMemberService: WorkspaceMemberService,
  ) {}
  @Post()
  async createWorkspaceMember(
    @Body() createWorkspaceMemberDto: CreateWorkspaceMemberDtoWidthToken,
  ) {
    const { token, workspace_id } = createWorkspaceMemberDto;
    return handleResultSuccess(
      await this.workspaceMemberService.createWorkspaceMemberWhenJoin(
        workspace_id,
        token,
      ),
    );
  }

  @Get()
  async findAllWorkspaceMember() {
    return handleResultSuccess(await this.workspaceMemberService.findAll());
  }

  @Get('members')
  @UseGuards(AuthGuard)
  async findMembersFromWorkspace(@RequestNestjs() request: IAuthRequest) {
    return handleResultSuccess(
      await this.workspaceMemberService.findMemberFromWorkspace(
        request.user.id,
      ),
    );
  }

  @Patch(':id')
  updateWorkspaceMember(
    @Param('id') id: string,
    @Body() updateWorkspaceMemberDto: UpdateWorkspaceMemberDto,
  ) {
    return handleResultSuccess(
      this.workspaceMemberService.updateById(id, updateWorkspaceMemberDto),
    );
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  async removeWorkspaceMember(
    @Param('id') id: string,
    @RequestNestjs() request: IAuthRequest,
  ) {
    return handleResultSuccess(
      await this.workspaceMemberService.removeMember(id, request.user.id),
    );
  }
}
