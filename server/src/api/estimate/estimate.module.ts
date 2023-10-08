import { Module } from '@nestjs/common';
import { EstimateService } from './service/estimate.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Estimate } from './entitys/Estimate.entity';
import { EstimatePoint } from './entitys/EstimatePoint.entity';
import { EstimatePointService } from './service/EstimatePoint.service';
import { EstimateController } from './controller/estimate.controller';
import { EstimatePointController } from './controller/EstimatePoint.controller';

@Module({
  imports: [SequelizeModule.forFeature([Estimate, EstimatePoint])],
  providers: [EstimateService, EstimatePointService],
  controllers: [EstimateController, EstimatePointController]
})
export class EstimateModule { }
