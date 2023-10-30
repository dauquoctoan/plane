import { Module } from '@nestjs/common';
import { WorkspaceService } from './service/workspace.service';
import { Workspace } from './entitys/Workspace.entity';
import { WorkspaceController } from './controller/Workspace.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Team } from './entitys/Team.entity';
import { TeamMember } from './entitys/TeamMember.entity';
import { TeamService } from './service/Team.service';
import { TeamMemberService } from './service/TeamMember.service';
import { TeamController } from './controller/Team.controller';
import { TeamMemberController } from './controller/TeamMember.controller';
import { WorkspaceMember } from './entitys/WorkspaceMember.entity';
import { WorkspaceMemberInvite } from './entitys/WorkspaceMemberInvite.entity';
import { WorkspaceTheme } from './entitys/WorkspaceTheme.entity';
import { WorkspaceMemberInviteController } from './controller/WorkspaceMemberInvite.controller';
import { WorkspaceMemberController } from './controller/WorkspaceMember.controller';
import { WorkspaceThemeController } from './controller/WorkspaceTheme.controller';
import { WorkspaceMemberService } from './service/WorkspaceMember.service';
import { WorkspaceMemberInviteService } from './service/WorkspaceMemberInvite.service';
import { WorkspaceThemeService } from './service/WorkspaceTheme.service';

@Module({
  imports: [SequelizeModule.forFeature([
    Workspace,
    Team,
    TeamMember,
    WorkspaceMember,
    WorkspaceMemberInvite,
    WorkspaceTheme
  ])],
  providers: [TeamService, TeamMemberService, WorkspaceService, WorkspaceMemberService, WorkspaceMemberInviteService, WorkspaceThemeService],
  controllers: [TeamController, TeamMemberController, WorkspaceController, WorkspaceMemberController, WorkspaceMemberInviteController, WorkspaceThemeController],
  exports: [WorkspaceService],
})
export class WorkspaceModule { }
