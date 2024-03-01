import { Module } from '@nestjs/common';
import { CycleService } from './service/cycle.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Cycle } from './entitys/Cycle.entity';
import { CycleIssue } from './entitys/CycleIssue.entity';
import { CycleFavorite } from './entitys/CycleFavorite.entity';
import { CycleFavoriteService } from './service/CycleFavorite.service';
import { CycleIssueService } from './service/CycleIssue.service';
import { CycleController } from './controller/cycle.controller';
import { CycleFavoriteController } from './controller/CycleFavorite.controller';
import { CycleIssueController } from './controller/CycleIssue.controller';
import { UserService } from '../user/service/User.service';
import { User } from '../user/entitys/User.entity';
import { CycleUserPropertiesService } from './service/CycleUserProperties.service';
import { CycleUserPropertiesController } from './controller/CycleUserProperties.controller';
import { CycleUserProperties } from './entitys/CycleUserProperties';

@Module({
  imports: [SequelizeModule.forFeature([Cycle, CycleIssue, CycleFavorite, User, CycleUserProperties])
],
  providers: [CycleService, CycleFavoriteService, CycleIssueService, UserService, CycleUserPropertiesService],
  controllers: [CycleController, CycleFavoriteController, CycleIssueController, CycleUserPropertiesController],
  exports:[CycleIssueService],
})

export class CycleModule {}
