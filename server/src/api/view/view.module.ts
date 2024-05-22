import { Module } from '@nestjs/common';
import { IssueViewService } from './service/IssueView.service';
import { IssueViewController } from './controller/IssueView.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { GlobalViewController } from './controller/GlobalView.controller';
import { IssueViewFavoriteController } from './controller/IssueViewFavorite.controller';
import { IssueView } from './entitys/IssueView.entity';
import { IssueViewFavorite } from './entitys/IssueViewFavorite.entity';
import { GlobalView } from './entitys/GlobalView.entity';
import { IssueViewFavoriteService } from './service/IssueViewFavorite.service';
import { GlobalViewService } from './service/GlobalView.service';
import { UserService } from '../user/service/user.service';
import { User } from '../user/entitys/User.entity';
import { ProjectView } from './entitys/ProjectView.entity';
import { ProjectViewService } from './service/ProjectView.service';
import { ProjectViewController } from './controller/ProjectView.controller';

@Module({
  imports: [SequelizeModule.forFeature([IssueView, IssueViewFavorite, GlobalView, User, ProjectView])],
  providers: [IssueViewService, GlobalViewService, IssueViewFavoriteService, UserService, ProjectViewService],
  controllers: [IssueViewController, GlobalViewController, IssueViewFavoriteController, ProjectViewController]
})

export class ViewModule {}
