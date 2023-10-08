import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/api/Base.service';
import { IssueView } from '../entitys/IssueView.entity';
import { Repository } from 'sequelize-typescript';
import { InjectRepository } from '@nestjs/typeorm';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class IssueViewService extends BaseService {
    constructor(@InjectModel(IssueView) public repository: Repository<IssueView>) {
        super(repository);
    }
}
