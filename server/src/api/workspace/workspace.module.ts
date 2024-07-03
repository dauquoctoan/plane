import { Module, forwardRef } from '@nestjs/common';
import { WorkspaceService } from './service/workspace.service';
import { Workspace } from './entitys/Workspace.entity';
import { SequelizeModule } from '@nestjs/sequelize';
import { Team } from './entitys/Team.entity';
import { TeamMember } from './entitys/TeamMember.entity';
import { TeamMemberService } from './service/TeamMember.service';
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
import { User } from '../user/entitys/User.entity';
import { UserModule } from '../user/user.module';
import { UserService } from '../user/service/user.service';
import { TeamService } from './service/team.service';
import { TeamController } from './controller/team.controller';
import { WorkspaceController } from './controller/workspace.controller';

@Module({
  imports: [
    SequelizeModule.forFeature([
      User,
      Workspace,
      Team,
      TeamMember,
      WorkspaceMember,
      WorkspaceMemberInvite,
      WorkspaceTheme,
    ]),
    forwardRef(() => UserModule),
  ],
  providers: [
    UserService,
    TeamService,
    TeamMemberService,
    WorkspaceService,
    WorkspaceMemberService,
    WorkspaceMemberInviteService,
    WorkspaceThemeService,
  ],
  controllers: [
    TeamController,
    TeamMemberController,
    WorkspaceController,
    WorkspaceMemberController,
    WorkspaceMemberInviteController,
    WorkspaceThemeController,
  ],
  exports: [WorkspaceService],
})
export class WorkspaceModule {}
