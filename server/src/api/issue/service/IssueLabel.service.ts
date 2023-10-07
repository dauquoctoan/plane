import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { BaseService } from 'src/api/Base.service';
import { IssueLabel } from '../entitys/IssueLabel.entity';
import { IssueService } from './issue.service';

@Injectable()
export class IssueLabelService extends BaseService {
    constructor(
        @InjectModel(IssueLabel)
        private issueLabel: typeof IssueService,
    ) {
        super(issueLabel)
    }
}
