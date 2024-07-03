import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Repository } from 'sequelize-typescript';
import { BaseService } from 'src/api/Base.service';
import { EstimatePoint } from '../entitys/EstimatePoint.entity';
import { CreateEstimatePointDto } from '../dto/EstimatePoint.dto';
import { handleResultError } from 'src/helper/handleresult';
import { messageCreateFail } from 'src/helper/message.create';

@Injectable()
export class EstimatePointService extends BaseService<EstimatePoint> {
  constructor(
    @InjectModel(EstimatePoint) public repository: Repository<EstimatePoint>,
  ) {
    super(repository);
  }

  async createEstimatePoint(
    data: CreateEstimatePointDto[],
    estimate_id: string,
  ) {
    try {
      return await this.repository.bulkCreate(
        data.map(e => {
          return { ...e, estimate_id: estimate_id };
        }),
      );
    } catch (error) {
      handleResultError({
        message: messageCreateFail(this.repository.getTableName()),
        messageDetail: error,
      });
    }
  }
}
