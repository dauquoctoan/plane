import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { BaseService } from 'src/api/Base.service';
import { IssueBlocker } from '../entitys/IssueBlocker.entity';

@Injectable()
export class IssueBlockerService extends BaseService<IssueBlocker> {
    constructor(
        @InjectModel(IssueBlocker)
        private issueBlocker: typeof IssueBlocker,
    ) {
        super(issueBlocker)
    }
}
