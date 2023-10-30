import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Repository } from 'sequelize-typescript';
import { BaseService } from 'src/api/Base.service';
import { ExporterHistory } from '../entitys/ExporterHistory.entity';

@Injectable()
export class ExporterService extends BaseService<ExporterHistory> {
    constructor(@InjectModel(ExporterHistory) public repository: Repository<ExporterHistory>) {
        super(repository);
    }
}
