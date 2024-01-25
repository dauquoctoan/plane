import { Module, forwardRef } from '@nestjs/common';
import { CycleService } from './service/cycle.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Cycle } from './entitys/Cycle.entity';
import { CycleIssue } from './entitys/CycleIssue.entity';
import { CycleFavorite } from './entitys/CycleFavorite.entity';
import { CycleFavoriteService } from './service/CycleFavorite.service';
import { CycleIssueService } from './service/CycleIssue.service';
import { CycleController } from './controller/cycle.controller';
import { CycleFavoriteController } from './controller/CycleFavorite.entity';
import { CycleIssueController } from './controller/CycleIssue.entity';
import { UserService } from '../user/service/User.service';
import { User } from '../user/entitys/User.entity';

@Module({
  imports: [SequelizeModule.forFeature([Cycle, CycleIssue, CycleFavorite, User])
],
  providers: [CycleService, CycleFavoriteService, CycleIssueService, UserService],
  controllers: [CycleController, CycleFavoriteController, CycleIssueController],
  exports:[CycleIssueService],
})

export class CycleModule {}
