import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Repository } from 'sequelize-typescript';
import { BaseService } from 'src/api/Base.service';
import { CycleIssue } from '../entitys/CycleIssue.entity';

@Injectable()
export class CycleIssueService extends BaseService<CycleIssue> {
    constructor(@InjectModel(CycleIssue) public repository: Repository<CycleIssue>) {
        super(repository)
    }
}
