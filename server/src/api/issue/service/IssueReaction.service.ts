import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { BaseService } from 'src/api/Base.service';
import { IssueReaction } from '../entitys/IssueReaction.entity';

@Injectable()
export class IssueReactionService extends BaseService {
    constructor(
        @InjectModel(IssueReaction)
        private issueReaction: typeof IssueReaction,
    ) {
        super(issueReaction)
    }
}
