import { Module } from '@nestjs/common';
import { AnalyticViewService } from './service/analytic.service';
import { AnalyticView } from './entitys/AnalyticView.entity';
import { SequelizeModule } from '@nestjs/sequelize';
import { AnalyticViewController } from './controller/AnalyticView.controller';

@Module({
  imports: [SequelizeModule.forFeature([AnalyticView])],
  providers: [AnalyticViewService],
  controllers: [AnalyticViewController]
})
export class AnalyticModule { }
