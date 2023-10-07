import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { BaseService } from 'src/api/Base.service';
import { IssueAttachment } from '../entitys/IssueAttachment.entity';

@Injectable()
export class IssueAttachmentService extends BaseService {
    constructor(
        @InjectModel(IssueAttachment)
        private issueAttachment: typeof IssueAttachment,
    ) {
        super(issueAttachment)
    }
}
