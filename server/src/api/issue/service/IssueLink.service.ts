import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { BaseService } from 'src/api/Base.service';
import { IssueLink } from '../entitys/IssueLink.entity';

@Injectable()
export class IssueLinkService extends BaseService<IssueLink> {
    constructor(
        @InjectModel(IssueLink)
        private issueLink: typeof IssueLink,
    ) {
        super(issueLink)
    }
}
