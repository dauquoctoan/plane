import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { BaseService } from 'src/api/Base.service';
import { Issue } from '../entitys/Issue.entity';

@Injectable()
export class IssueService extends BaseService<Issue>{
    constructor(
        @InjectModel(Issue)
        private issue: typeof Issue,
    ) {
        super(issue)
    }
}
