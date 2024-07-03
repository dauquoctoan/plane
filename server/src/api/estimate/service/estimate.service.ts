import { Injectable } from '@nestjs/common';
import { Estimate } from '../entitys/Estimate.entity';
import { Repository } from 'sequelize-typescript';
import { InjectModel } from '@nestjs/sequelize';
import { BaseService } from 'src/api/Base.service';
import { CreateEstimateDto } from '../dto/Estimate.dto';
import { EstimatePointService } from './EstimatePoint.service';
import { UserService } from 'src/api/user/service/user.service';

@Injectable()
export class EstimateService extends BaseService<Estimate> {
  constructor(
    @InjectModel(Estimate) public repository: Repository<Estimate>,
    public estimatePointService: EstimatePointService,
    public useService: UserService,
  ) {
    super(repository);
  }

  async createEstimate(data: CreateEstimateDto, userId: string) {
    const info = await this.useService.findOne({ where: { id: userId } });
    const result = await this.repository.create({
      name: data.name,
      description: data.description,
      project_id: data.project_id,
      workspace_id: info.last_workspace_id,
    });
    if (result) {
      return await this.estimatePointService.create(data.estimate_points);
    }
  }
}
