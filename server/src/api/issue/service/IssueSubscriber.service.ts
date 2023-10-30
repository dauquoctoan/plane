import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { BaseService } from 'src/api/Base.service';
import { Issue } from '../entitys/Issue.entity';
import { IssueSubscriber } from '../entitys/IssueSubscriber.entity';

@Injectable()
export class IssueSubscriberService extends BaseService<IssueSubscriber> {
    constructor(
        @InjectModel(IssueSubscriber)
        private issueSubscriber: typeof IssueSubscriber,
    ) {
        super(issueSubscriber)
    }
}
