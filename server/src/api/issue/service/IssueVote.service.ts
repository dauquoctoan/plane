import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { BaseService } from 'src/api/Base.service';
import { IssueVote } from '../entitys/IssueVote.entity';

@Injectable()
export class IssueVoteService extends BaseService<IssueVote> {
    constructor(
        @InjectModel(IssueVote)
        private issueService: typeof IssueVote,
    ) {
        super(issueService)
    }
}
