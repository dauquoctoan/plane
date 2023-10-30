import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { BaseService } from 'src/api/Base.service';
import { IssueActivity } from '../entitys/IssueActivity.entity';

@Injectable()
export class IssueActivityService extends BaseService<IssueActivity> {
    constructor(
        @InjectModel(IssueActivity)
        private issueActivity: typeof IssueActivity,
    ) {
        super(issueActivity)
    }
}
