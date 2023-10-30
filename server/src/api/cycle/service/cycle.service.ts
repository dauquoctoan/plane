import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Repository } from 'sequelize-typescript';
import { BaseService } from 'src/api/Base.service';
import { Cycle } from '../entitys/Cycle.entity';

@Injectable()
export class CycleService extends BaseService<Cycle> {
    constructor(@InjectModel(Cycle) public repository: Repository<Cycle>) {
        super(repository)
    }
}
