import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Repository } from 'sequelize-typescript';
import { BaseService } from 'src/api/Base.service';
import { InboxIssue } from '../entitys/InboxIssue.entity';

@Injectable()
export class InboxIssueService extends BaseService {
    constructor(@InjectModel(InboxIssue) public repository: Repository<InboxIssue>) {
        super(repository)
    }
}
