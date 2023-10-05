import { Module } from '@nestjs/common';
import { WorkspaceService } from './workspace.service';
import { Workspace } from './entitys/Workspace.entity';
import { WorkspaceController } from './workspace.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Team } from './entitys/Team.entity';
import { TeamMember } from './entitys/TeamMember.entity';

@Module({
  imports: [SequelizeModule.forFeature([Workspace, Team, TeamMember])],
  providers: [WorkspaceService],
  controllers: [WorkspaceController]
})
export class WorkspaceModule { }
