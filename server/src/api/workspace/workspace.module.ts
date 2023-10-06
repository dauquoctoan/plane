import { Module } from '@nestjs/common';
import { WorkspaceService } from './service/workspace.service';
import { Workspace } from './entitys/Workspace.entity';
import { WorkspaceController } from './controller/workspace.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Team } from './entitys/Team.entity';
import { TeamMember } from './entitys/TeamMember.entity';
import { TeamService } from './service/team.service';
import { TeamMemberService } from './service/team-member.service';
import { TeamController } from './controller/team.controller';
import { TeamMemberController } from './controller/team-member.controller';

@Module({
  imports: [SequelizeModule.forFeature([Workspace, Team, TeamMember])],
  providers: [WorkspaceService, TeamService, TeamMemberService],
  controllers: [WorkspaceController, TeamController, TeamMemberController]
})
export class WorkspaceModule { }
