import { Module } from '@nestjs/common';
import { CycleService } from './service/cycle.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Cycle } from './entitys/Cycle.entity';
import { CycleIssue } from './entitys/CycleIssue.entity';
import { CycleFavorite } from './entitys/CycleFavorite.entity';
import { CycleFavoriteService } from './service/CycleFavorite.entity';
import { CycleIssueService } from './service/CycleIssue.entity';
import { CycleController } from './controller/cycle.controller';
import { CycleFavoriteController } from './controller/CycleFavorite.entity';
import { CycleIssueController } from './controller/CycleIssue.entity';

@Module({
  imports: [SequelizeModule.forFeature([
    Cycle,
    CycleIssue,
    CycleFavorite
  ])],
  providers: [CycleService, CycleFavoriteService, CycleIssueService],
  controllers: [CycleController, CycleFavoriteController, CycleIssueController]
})
export class CycleModule { }
