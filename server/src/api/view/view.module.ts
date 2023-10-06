import { Module } from '@nestjs/common';
import { IssueViewService } from './service/issue-view.service';
import { IssueViewController } from './controller/issue-view.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { GlobalViewController } from './controller/global-view.controller';
import { IssueViewFavoriteController } from './controller/issue-view-favorite.controller';
import { IssueView } from './entitys/issue-view.entity';
import { IssueViewFavorite } from './entitys/issue-view-favorite.entity';
import { GlobalView } from './entitys/global-view.entity';
import { IssueViewFavoriteService } from './service/issue-view-favorite.service';
import { GlobalViewService } from './service/global-view.service';

@Module({
  imports: [SequelizeModule.forFeature([IssueView, IssueViewFavorite, GlobalView])],
  providers: [IssueViewService, GlobalViewService, IssueViewFavoriteService],
  controllers: [IssueViewController, GlobalViewController, IssueViewFavoriteController]
})

export class ViewModule { }
