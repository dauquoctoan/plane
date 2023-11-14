import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { BaseService } from 'src/api/Base.service';
import { IssueLabel } from '../entitys/IssueLabel.entity';

@Injectable()
export class IssueLabelService extends BaseService<IssueLabel> {
    constructor(
        @InjectModel(IssueLabel)
        private issueLabel: typeof IssueLabel,
    ) {
        super(issueLabel)
    }
}
