import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { BaseService } from 'src/api/Base.service';
import { IssueProperty } from '../entitys/IssueProperty.entity';

@Injectable()
export class IssuePropertyService extends BaseService {
    constructor(
        @InjectModel(IssueProperty)
        private issueProperty: typeof IssueProperty,
    ) {
        super(issueProperty)
    }
}
