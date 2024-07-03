import { Module } from '@nestjs/common';
import { PageService } from './service/page.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Page } from './entitys/Page.entity';
import { PageBlock } from './entitys/PageBlock.entity';
import { PageFavorite } from './entitys/PageFavorite.entity';
import { PageLabel } from './entitys/PageLabel.entity';
import { PageFavoriteController } from './controller/PageFavorite.controller';
import { PageLabelController } from './controller/PageLabel.controller';
import { PageBlockService } from './service/PageBlock.service';
import { PageFavoriteService } from './service/PageFavorite.service';
import { PageLabelService } from './service/PageLabel.service';
import { PageController } from './controller/page.controller';
import { PageBlockBlockController } from './controller/PageBlock.controller';
import { User } from '../user/entitys/User.entity';
import { UserService } from '../user/service/user.service';

@Module({
  imports: [
    SequelizeModule.forFeature([
      Page,
      PageBlock,
      PageFavorite,
      PageLabel,
      User,
    ]),
  ],
  providers: [
    PageService,
    PageBlockService,
    PageFavoriteService,
    PageLabelService,
    UserService,
  ],
  controllers: [
    PageController,
    PageBlockBlockController,
    PageFavoriteController,
    PageLabelController,
  ],
})
export class PageModule {}
