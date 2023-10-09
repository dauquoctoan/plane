import { Module } from '@nestjs/common';
import { PageService } from './service/page.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Page } from './entitys/Page.entity';
import { PageBlock } from './entitys/PageBlock.entity';
import { PageFavorite } from './entitys/PageFavorite.entity';
import { PageLabel } from './entitys/PageLabel.entity';

@Module({
  imports: [SequelizeModule.forFeature([
    Page,
    PageBlock,
    PageFavorite,
    PageLabel
  ])],
  providers: [PageService]
})
export class PageModule { }
