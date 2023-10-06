import { Module } from '@nestjs/common';
import { ProjectService } from './service/project.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProjectController } from './controller/project.controller';
import { Project } from './entitys/project.entity';
import { ProjectFavorite } from './entitys/project-favorite.entity';
import { ProjectMember } from './entitys/project-member.entity';
import { ProjectPublicMember } from './entitys/project-public-member.entity';
import { ProjectDeployBoard } from './entitys/project-deploy-board.entity';
import { ProjectIdentifier } from './entitys/project-identifier.entity';
import { ProjectMemberInvite } from './entitys/project-member-invite.entity';
import { ProjectDeployBoardController } from './controller/project-deploy-board.controller';
import { ProjectFavoriteController } from './controller/project-favorite.controller';
import { ProjectIdentifierController } from './controller/project-identifier.controller';
import { ProjectMemberController } from './controller/project-member.controller';
import { ProjectMemberInviteController } from './controller/project-member-invite.controller';
import { ProjectPublicMemberController } from './controller/project-public-member.controller';
import { ProjectDeployBoardService } from './service/project-deploy-board.service';
import { ProjectFavoriteService } from './service/project-favorite.service';
import { ProjectIdentifierService } from './service/project-identifier.service';
import { ProjectMemberService } from './service/project-member.service';
import { ProjectMemberInviteService } from './service/project-member-invite.service';
import { ProjectPublicMemberService } from './service/project-public-member.service';

@Module({
  imports: [SequelizeModule.forFeature(
    [
      Project,
      ProjectDeployBoard,
      ProjectFavorite,
      ProjectIdentifier,
      ProjectMember,
      ProjectMemberInvite,
      ProjectPublicMember,
    ])
  ],
  providers: [
    ProjectService,
    ProjectDeployBoardService,
    ProjectFavoriteService,
    ProjectIdentifierService,
    ProjectMemberService,
    ProjectMemberInviteService,
    ProjectPublicMemberService
  ],
  controllers: [
    ProjectController,
    ProjectDeployBoardController,
    ProjectFavoriteController,
    ProjectIdentifierController,
    ProjectMemberController,
    ProjectMemberInviteController,
    ProjectPublicMemberController
  ]
})

export class ProjectModule { }
