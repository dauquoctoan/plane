import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Delete,
  Param,
  Request as RequestNestjs,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { WorkspaceMemberInviteService } from '../service/WorkspaceMemberInvite.service';
import {
  CreateWorkspaceMemberInviteDto,
  CreatesWorkspaceMemberInviteDto,
  UpdateWorkspaceMemberInviteDto,
} from '../dto/WorkspaceMemberInvite.dto';
import { JwtService } from '@nestjs/jwt';
import { handleResultSuccess } from 'src/helper/handleresult';
import { IAuthRequest } from 'src/types/auth.types';
import { AuthGuard } from 'src/Guards/auth.guard';

@Controller('workspace-member-invite')
@ApiTags('Workspace Member Invite')
@ApiBearerAuth('access-token')
export class WorkspaceMemberInviteController {
  constructor(
    private readonly workspaceMemberInviteService: WorkspaceMemberInviteService,
    private jwtService: JwtService,
  ) {}
  @Post()
  async createWorkspaceMemberInvite(
    @Body() createWorkspaceMemberInviteDto: CreateWorkspaceMemberInviteDto,
  ) {
    return handleResultSuccess(
      await this.workspaceMemberInviteService.create(
        createWorkspaceMemberInviteDto,
      ),
    );
  }

  @Post('creates')
  async createsWorkspaceMemberInvite(
    @Body() createWorkspaceMemberInvite: CreatesWorkspaceMemberInviteDto,
  ) {
    const lsMember: CreateWorkspaceMemberInviteDto[] = Object.keys(
      createWorkspaceMemberInvite,
    ).map(key => {
      const email = createWorkspaceMemberInvite[key].email;
      const role = createWorkspaceMemberInvite[key].role;

      return {
        ...createWorkspaceMemberInvite[key],
        token: this.jwtService.sign(
          {
            email,
            role,
          },
          { expiresIn: process.env.TOKEN_TOKEN_EXPIRATION },
        ),
      };
    });
    return handleResultSuccess(
      await this.workspaceMemberInviteService.createsWorkspaceMemberInviteService(
        lsMember,
      ),
    );
  }

  @Post('join-workspace-member')
  @UseGuards(AuthGuard)
  async joinWorkspaceInWeb(
    @Body('data') lsWorkspaceMember: string[],
    @RequestNestjs() request: IAuthRequest,
  ) {
    return handleResultSuccess(
      await this.workspaceMemberInviteService.joinWrokspaceInWeb(
        lsWorkspaceMember,
        request.user.id,
      ),
    );
  }

  @Get('invitations')
  @UseGuards(AuthGuard)
  async findAllWorkspaceMemberInvite(@RequestNestjs() request: IAuthRequest) {
    return handleResultSuccess(
      await this.workspaceMemberInviteService.getMemberInviteByEmailAndWorkspace(
        request.user.id,
      ),
    );
  }

  @Get(':id')
  findWorkspaceMembersInvite(@Param('id') id: string) {
    return handleResultSuccess(
      this.workspaceMemberInviteService.findOneById(id),
    );
  }

  @Get(':id')
  findOneWorkspaceMemberInvite(@Param('id') id: string) {
    return handleResultSuccess(
      this.workspaceMemberInviteService.findOneById(id),
    );
  }

  @Patch(':id')
  updateWorkspaceMemberInvite(
    @Param('id') id: string,
    @Body() updateWorkspaceMemberInviteDto: UpdateWorkspaceMemberInviteDto,
  ) {
    return handleResultSuccess(
      this.workspaceMemberInviteService.updateById(
        id,
        updateWorkspaceMemberInviteDto,
      ),
    );
  }

  @Delete(':id')
  removeWorkspaceMemberInvite(@Param('id') id: string) {
    return handleResultSuccess(
      this.workspaceMemberInviteService.removeById(id),
    );
  }
}
