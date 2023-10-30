import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { BaseService } from 'src/api/Base.service';
import { IssueAssignee } from '../entitys/IssueAssignee.entity';

@Injectable()
export class IssueAssigneeService extends BaseService<IssueAssignee> {
    constructor(
        @InjectModel(IssueAssignee)
        private issueAssignee: typeof IssueAssignee,
    ) {
        super(issueAssignee)
    }
}
