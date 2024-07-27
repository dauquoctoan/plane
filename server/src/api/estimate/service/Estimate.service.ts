import { Injectable } from '@nestjs/common';
import { Estimate } from '../entitys/Estimate.entity';
import { Repository } from 'sequelize-typescript';
import { InjectModel } from '@nestjs/sequelize';
import { BaseService } from 'src/api/Base.service';
import { CreateEstimateDto, UpdateEstimateDto } from '../dto/Estimate.dto';
import { EstimatePointService } from './EstimatePoint.service';
import { UserService } from 'src/api/user/service/user.service';
import { handleResultError } from 'src/helper/handleresult';
import { messageCreateFail, messageUpdateFail } from 'src/helper/message.create';
import { EstimatePoint } from '../entitys/EstimatePoint.entity';

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
    try {
      const info = await this.useService.findOne({ where: { id: userId } });
      const estimate = await this.repository.create({
        name: data.name,
        description: data.description,
        project_id: data.project_id,
        workspace_id: info.last_workspace_id,
      })

      if (estimate) {
        const estimate_points = await this.estimatePointService.creates(data.estimate_points.map((e) => ({
          ...e,
          estimate_id: estimate.id
        })));
        if (estimate_points && estimate) return {
          ...estimate,
          estimate_points: estimate_points
        }
      }
    } catch (error) {
      handleResultError({ message: messageCreateFail(this.repository.getTableName()), messageDetail: error })
    }
  }

  async updateEstimate(data: UpdateEstimateDto, userId: string) {
    try {
      const estimate = await this.repository.update({
        name: data.name,
        description: data.description,
      }, {
        where: {
          id: data.id,
        }
      })

      if (estimate) {
        const estimate_points = await this.estimatePointService.creates(data.estimate_points.map((e) => ({
          ...e,
          estimate_id: data.id
        })));

        if (estimate_points && estimate) return {
          ...estimate,
          estimate_points: estimate_points
        }
      }
    } catch (error) {
      handleResultError({ message: messageUpdateFail(this.repository.getTableName()), messageDetail: error })
    }
  }

  async findEstimateByProject(projectId: string) {
    try {
      return await this.repository.findAll({
        where: {
          project_id: projectId,
        },
        include: [
          {
            model: EstimatePoint,
            as: 'estimate_points',
          }
        ],
        order: [
          [{ model: EstimatePoint, as: 'estimate_points' }, 'key', 'ASC']
        ]
      })
    } catch (error) {
      handleResultError({ message: messageCreateFail(this.repository.getTableName()), messageDetail: error })
    }
  }

  async findEstimateById(estimateId: string) {
    try {
      return await this.repository.findOne({
        where: {
          id: estimateId,
        },
        include: [
          {
            model: EstimatePoint,
            as: 'estimate_points',
          }
        ],
        order: [
          [{ model: EstimatePoint, as: 'estimate_points' }, 'key', 'ASC']
        ]
      })
    } catch (error) {
      handleResultError({ message: messageCreateFail(this.repository.getTableName()), messageDetail: error })
    }
  }
}
