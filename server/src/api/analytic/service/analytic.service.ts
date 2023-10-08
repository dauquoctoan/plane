import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Repository } from 'sequelize-typescript';
import { BaseService } from 'src/api/Base.service';
import { AnalyticView } from '../entitys/AnalyticView.entity';

@Injectable()
export class AnalyticViewService extends BaseService {
    constructor(@InjectModel(AnalyticView) public repository: Repository<AnalyticView>) {
        super(repository)
    }
}
