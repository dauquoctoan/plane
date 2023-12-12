import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { BaseService } from 'src/api/Base.service';
import { Issue } from '../entitys/Issue.entity';
import { handleResultError } from 'src/helper/handleresult';
import { messageCreateFail, messageFindFail } from 'src/helper/message.create';
import { User } from 'src/api/user/entitys/User.entity';
import { QueryIssueDto } from '../dto/Issue.dto';
import { UserService } from 'src/api/user/service/User.service';
import { State } from 'src/api/state/entitys/State.entity';

@Injectable()
export class IssueService extends BaseService<Issue>{
    constructor(
        @InjectModel(Issue)
        private issueRepository: typeof Issue,
        private readonly userService: UserService,
    ) {
        super(issueRepository)
    }

    async createIssue(issue: Issue, userId:string){
        try {
           const user = await this.userService.getUser(userId);
           if(user){
                const issueres = await this.issueRepository.create(issue)
                if(issueres){
                    await user.$add('issue', issueres)
                    return issueres
                }
           }
           handleResultError({ message: messageCreateFail(this.repository.getTableName())});
        } catch (error) {
            handleResultError({ message: messageCreateFail(this.repository.getTableName()), messageDetail: error });
        }
    }

    async findIssues({assignee, projectId, userId}:QueryIssueDto){
        const user = await this.userService.getUser(userId);
        if(user.last_workspace_id){
            if(assignee && projectId){
                return this.findIssuesAssign(user.last_workspace_id, projectId, assignee);
            }

            if(projectId){
                return await this.findIssuesByProject(user.last_workspace_id, +projectId);
            }

            return this.findAllIssues(user.last_workspace_id);
        }
        handleResultError({ message: messageFindFail(this.repository.getTableName()), messageDetail: 'Dont find your workspace' });
    }
    
    async findIssuesByProject(workspaceId:string, projectId:number){
        try {
            return await this.repository.findAll(
                {
                    where: {project_id: projectId, workspace_id:workspaceId},
                    include:[
                        {
                            model: User,
                        },
                        {
                            model:State, 
                            as:'state'
                        }
                    ],
                }
            )
        } catch (error) {
            handleResultError({ message: messageFindFail(this.repository.getTableName()), messageDetail: error });
        }
    }

    async findAllIssues(workspaceId:string){
        try {
            return await this.repository.findAll(
                {
                    where: {workspace_id: workspaceId},
                    include:[
                        {
                            model: User,
                        },
                        {
                            model:State, 
                            as:'state'
                        }
                    ]})
        } catch (error) {
            handleResultError({ message: messageFindFail(this.repository.getTableName()), messageDetail: error });
        }
    }
    last_workspace_id
    async findIssuesAssign(workspaceId:string, projectId:string, userId?:string){
        try {
            return await this.repository.findAll({
                where: {project_id: projectId, workspace_id: workspaceId},
                include:[
                    {
                        model: User,
                        where: {
                            id: userId,
                        },
                    },
                    {
                        model:State, 
                        as:'state'
                    }
                ]
        })
        } catch (error) {
            handleResultError({ message: messageFindFail(this.repository.getTableName()), messageDetail: error });
        }
    }
}
