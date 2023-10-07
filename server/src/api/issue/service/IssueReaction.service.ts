import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { BaseService } from 'src/api/Base.service';

@Injectable()
export class IssueService extends BaseService {
    constructor(
        @InjectModel(IssueService)
        private issueService: typeof IssueService,
    ) {
        super(issueService)
    }
}
