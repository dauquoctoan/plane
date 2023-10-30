import { Injectable } from '@nestjs/common';
import { Estimate } from '../entitys/Estimate.entity';
import { Repository } from 'sequelize-typescript';
import { InjectModel } from '@nestjs/sequelize';
import { BaseService } from 'src/api/Base.service';

@Injectable()
export class EstimateService extends BaseService<Estimate> {
    constructor(@InjectModel(Estimate) public repository: Repository<Estimate>) {
        super(repository)
    }
}
