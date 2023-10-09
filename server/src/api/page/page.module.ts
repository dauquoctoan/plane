import { Module } from '@nestjs/common';
import { PageService } from './service/page.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Page } from './entitys/Page.entity';
import { PageBlock } from './entitys/PageBlock.entity';
import { PageFavorite } from './entitys/PageFavorite.entity';
import { PageLabel } from './entitys/PageLabel.entity';
import { PageBlockController } from './controller/PageBlock.controller';
import { PageFavoriteController } from './controller/PageFavorite.controller';
import { PageLabelController } from './controller/PageLabel.controller';
import { PageBlockService } from './service/PageBlock.service';
import { PageFavoriteService } from './service/PageFavorite.service';
import { PageLabelService } from './service/PageLabel.service';
import { PageController } from './controller/page.controller';

@Module({
  imports: [SequelizeModule.forFeature([Page, PageBlock, PageFavorite, PageLabel])],
  providers: [PageService, PageBlockService, PageFavoriteService, PageLabelService],
  controllers: [PageController, PageBlockController, PageFavoriteController, PageLabelController]
})

export class PageModule { }
