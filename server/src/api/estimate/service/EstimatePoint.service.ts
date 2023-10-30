import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Repository } from 'sequelize-typescript';
import { BaseService } from 'src/api/Base.service';
import { EstimatePoint } from '../entitys/EstimatePoint.entity';

@Injectable()
export class EstimatePointService extends BaseService<EstimatePoint> {
    constructor(@InjectModel(EstimatePoint) public repository: Repository<EstimatePoint>) {
        super(repository)
    }
}
