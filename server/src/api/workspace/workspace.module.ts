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

@Module({
  imports: [SequelizeModule.forFeature([Workspace, Team, TeamMember])],
  providers: [WorkspaceService, TeamService, TeamMemberService],
  controllers: [WorkspaceController, TeamController, TeamMemberController]
})

export class WorkspaceModule { }
