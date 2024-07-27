import { Module } from '@nestjs/common';
import { EstimateService } from './service/Estimate.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Estimate } from './entitys/Estimate.entity';
import { EstimatePoint } from './entitys/EstimatePoint.entity';
import { EstimatePointService } from './service/EstimatePoint.service';
import { EstimateController } from './controller/Estimate.controller';
import { EstimatePointController } from './controller/EstimatePoint.controller';
import { UserService } from '../user/service/user.service';
import { User } from '../user/entitys/User.entity';

@Module({
  imports: [SequelizeModule.forFeature([Estimate, EstimatePoint, User])],
  providers: [EstimateService, EstimatePointService, UserService],
  controllers: [EstimateController, EstimatePointController],
})
export class EstimateModule {}
