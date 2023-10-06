import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProjectController } from './project.controller';
import { Project } from './entitys/Project.entity';
import { ProjectBaseModel } from './entitys/ProjectBaseModel.entity';
import { ProjectDeployBoard } from './entitys/ProjectDeployBoard.entity';
import { ProjectFavorite } from './entitys/ProjectFavorite.entity';
import { ProjectIdentifier } from './entitys/ProjectIdentifier.entity';
import { ProjectMember } from './entitys/ProjectMember.entity';
import { ProjectMemberInvite } from './entitys/ProjectMemberInvite.entity';
import { ProjectPublicMember } from './entitys/ProjectPublicMember.entity';

@Module({
  imports: [SequelizeModule.forFeature(
    [
      // Project,
      // ProjectBaseModel,
      // ProjectDeployBoard,
      // ProjectFavorite,
      // ProjectIdentifier,
      // ProjectMember,
      // ProjectMemberInvite,
      // ProjectPublicMember
    ])
  ],
  providers: [ProjectService],
  controllers: [ProjectController]
})

export class ProjectModule { }
