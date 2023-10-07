import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { BaseService } from 'src/api/Base.service';
import { IssueComment } from '../entitys/IssueComment.entity';

@Injectable()
export class IssueCommentService extends BaseService {
    constructor(
        @InjectModel(IssueComment)
        private issueComment: typeof IssueComment,
    ) {
        super(issueComment)
    }
}
