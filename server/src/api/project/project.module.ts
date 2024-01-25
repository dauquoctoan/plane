import { Module } from '@nestjs/common';
import { ProjectService } from './service/Project.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProjectController } from './controller/Project.controller';
import { Project } from './entitys/Project.entity';
import { ProjectMember } from './entitys/ProjectMember.entity';
import { ProjectPublicMember } from './entitys/ProjectPublicMember.entity';
import { ProjectDeployBoard } from './entitys/ProjectDeployBoard.entity';
import { ProjectIdentifier } from './entitys/ProjectIdentifier.entity';
import { ProjectMemberInvite } from './entitys/ProjectMemberInvite.entity';
import { ProjectDeployBoardController } from './controller/ProjectDeployBoard.controller';
import { ProjectFavoriteController } from './controller/ProjectFavorite.controller';
import { ProjectIdentifierController } from './controller/ProjectIdentifier.controller';
import { ProjectMemberController } from './controller/ProjectMember.controller';
import { ProjectMemberInviteController } from './controller/ProjectMemberInvite.controller';
import { ProjectPublicMemberController } from './controller/ProjectPublicMember.controller';
import { ProjectDeployBoardService } from './service/ProjectDeployBoard.service';
import { ProjectFavoriteService } from './service/ProjectFavorite.service';
import { ProjectIdentifierService } from './service/ProjectIdentifier.service';
import { ProjectMemberService } from './service/ProjectMember.service';
import { ProjectMemberInviteService } from './service/ProjectMemberInvite.service';
import { ProjectPublicMemberService } from './service/ProjectPublicMember.service';
import { ProjectFavorite } from './entitys/projectFavorite.entity';
import { UserModule } from '../user/User.module';
import { UserService } from '../user/service/User.service';
import { User } from '../user/entitys/User.entity';

@Module({
  imports: [SequelizeModule.forFeature(
    [
      User,
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
    UserService,
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
  ],
  exports:[ 
    ProjectService,
    ProjectDeployBoardService,
    ProjectFavoriteService,
    ProjectIdentifierService,
    ProjectMemberService,
    ProjectMemberInviteService,
    ProjectPublicMemberService
  ]
})

export class ProjectModule { }
