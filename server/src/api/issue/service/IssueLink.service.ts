import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { BaseService } from 'src/api/Base.service';
import { IssueLink } from '../entitys/IssueLink.entity';
import { handleResultError } from 'src/helper/handleresult';
import { messageFindFail } from 'src/helper/message.create';

@Injectable()
export class IssueLinkService extends BaseService<IssueLink> {
    constructor(
        @InjectModel(IssueLink)
        private issueLink: typeof IssueLink,
    ) {
        super(issueLink)
    }

    findIssueLinkByIssueId(issueId:string){
        try {
            return this.issueLink.findAll({where:{
                issue_id: issueId
            }})
        } catch (error) {
            handleResultError({message:messageFindFail(this.repository.getTableName()), messageDetail: error})
        }
    }
}
