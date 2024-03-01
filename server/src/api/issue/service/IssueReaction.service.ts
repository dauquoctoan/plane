import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { BaseService } from 'src/api/Base.service';
import { IssueReaction } from '../entitys/IssueReaction.entity';
import { CreateIssueReactionDto } from '../dto/IssueReaction.dto';
import { handleResultError } from 'src/helper/handleresult';
import { messageCreateFail, messageFindFail } from 'src/helper/message.create';
import { User } from 'src/api/user/entitys/User.entity';

@Injectable()
export class IssueReactionService extends BaseService<IssueReaction> {
    constructor(
        @InjectModel(IssueReaction)
        private issueReaction: typeof IssueReaction,
    ) {
        super(issueReaction)
    }

    async createAction(data:CreateIssueReactionDto){
        try {
            const reaction = await this.repository.findOne({where:{issue_id:data.issue_id, actor: data.actor, reaction: data.reaction}})
            if(!reaction)return this.repository.create(data)
            handleResultError({message: messageCreateFail(this.repository.getTableName()),data:null,messageDetail:'Reaction already exists',statusCode: 500})
        } catch (error) {
            handleResultError({message: messageCreateFail(this.repository.getTableName()),data:null,messageDetail: error, statusCode: 500})
        }
    }

    async findActions(isueId:string){
        try {
            return await this.repository.findAll({where: {issue_id: isueId}, include:[
                {
                    model: User,
                    as: 'user'
                }
            ]})
        } catch (error) {
            handleResultError({message: messageFindFail(this.repository.getTableName()),data:null,messageDetail: error, statusCode: 500})
        }
    }

    async removeAction(actionId:string){
        try {
            return await this.repository.destroy({where: {id: actionId}})
        } catch (error) {
            handleResultError({message: messageFindFail(this.repository.getTableName()),data:null,messageDetail: error, statusCode: 500})
        }
    }
}
