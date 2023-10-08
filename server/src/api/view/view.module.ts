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

@Module({
  imports: [SequelizeModule.forFeature([IssueView, IssueViewFavorite, GlobalView])],
  providers: [IssueViewService, GlobalViewService, IssueViewFavoriteService],
  controllers: [IssueViewController, GlobalViewController, IssueViewFavoriteController]
})

export class ViewModule { }
