import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { BaseService } from 'src/api/Base.service';
import { Issue } from '../entitys/Issue.entity';
import { handleResultError } from 'src/helper/handleresult';
import { messageCreateFail, messageFindFail } from 'src/helper/message.create';
import { User } from 'src/api/user/entitys/User.entity';
import { CreateIssueDto, QueryIssueDto } from '../dto/Issue.dto';
import { UserService } from 'src/api/user/service/User.service';
import { State } from 'src/api/state/entitys/State.entity';
import { Op } from 'sequelize';
import { IssueLabelService } from './IssueLabel.service';
import { LabelService } from './Label.service';
import { Label } from '../entitys/Label.entity';
import { Project } from 'src/api/project/entitys/Project.entity';

@Injectable()
export class IssueService extends BaseService<Issue>{
    constructor(
        @InjectModel(Issue)
        private issueRepository: typeof Issue,
        private readonly userService: UserService,
        private readonly issueLabel: IssueLabelService,
        private readonly labelService: LabelService,
    ) {
        super(issueRepository)
    }

    include=[
        {
            model: User,
            as: 'creator',
        },
        {
            model: User,
            as: 'assignees'
        },
        {
            model: Label,
            as: 'labels'
        },
        {
            model:State, 
            as: 'state'
        }
    ]

    async createIssue(issueItem: CreateIssueDto, idUser: string){
        try {
           let users=[], labels=[];
           if(issueItem.assignees && issueItem.assignees.length>0){
                users = await this.userService.findAll({ where:{
                    id: {
                        [Op.in]: issueItem.assignees || ['']
                    }
                }});
            }

           if(issueItem.labels && issueItem.labels.length > 0){
                labels = await this.labelService.findAll({where:{
                    id: {
                        [Op.in]: issueItem.labels || ['']
                    }
                }})
            }
           
           const issue = await this.issueRepository.create({create_by: idUser,...issueItem} as any)

           await issue.$add('assignees', users);
           await issue.$add('labels', labels);

           return {...issue.dataValues, assignees: users, labels: labels}
        } catch (error) {
            handleResultError({ message: messageCreateFail(this.repository.getTableName()), messageDetail: error });
        }
    }

    // async findIssues({assignee, projects, userId, createBy, createbys}:QueryIssueDto){
    //     const user = await this.userService.getUser(userId);
    //     if(user.last_workspace_id){
    //         if(assignee){
    //             return this.findIssuesAssign(user.last_workspace_id, assignee);
    //         }

    //         if(createBy){
    //             return this.findIssuesCreatedBy(user.last_workspace_id, createBy)
    //         }

    //         if(createbys){
    //             return this.findIssuesCreatedBy(user.last_workspace_id, createBy)
    //         }

    //         if(projects && projects.length > 0){
    //             return await this.findIssuesByProject(user.last_workspace_id, + projects);
    //         }

    //         return this.findAllIssues(user.last_workspace_id);
    //     }
    //     handleResultError({ message: messageFindFail(this.repository.getTableName()), messageDetail: 'Dont find your workspace' });
    // }

    // async findIssuesCreatedBy(workspaceId:string, createBy:string ){
    //     try {
    //         return await this.repository.findAll(
    //             {
    //                 where: {create_by: createBy, workspace_id: workspaceId},
    //                 include: this.include
    //             }
    //         )
    //     } catch (error) {
    //         handleResultError({ message: messageFindFail(this.repository.getTableName()), messageDetail: error });
    //     }
    // }
    
    // async findIssuesByProject(workspaceId:string, projectId:number){
    //     try {
    //         return await this.repository.findAll(
    //             {
    //                 where: {project_id: projectId, workspace_id:workspaceId},
    //                 include: this.include
    //             }
    //         )
    //     } catch (error) {
    //         handleResultError({ message: messageFindFail(this.repository.getTableName()), messageDetail: error });
    //     }
    // }

    // async findAllIssues(workspaceId:string){
    //     try {
    //         return await this.repository.findAll(
    //             {
    //                 where: { workspace_id: workspaceId},
    //                 include: this.include
    //             })
    //     } catch (error) {
    //         handleResultError({ message: messageFindFail(this.repository.getTableName()), messageDetail: error });
    //     }
    // }

    // async findIssuesAssign(workspaceId:string, assignee?:string){
    //     try {
    //         return await this.repository.findAll({
    //             where: {
    //                 workspace_id: workspaceId,
    //             },
    //             include: [
    //                 {
    //                     model: User,
    //                     as: 'creator',
    //                 },
    //                 {
    //                     model: User,
    //                     as: 'assignees',
    //                     where:{
    //                         id: [assignee]
    //                     }
    //                 },
    //                 {
    //                     model: Label,
    //                     as: 'labels'
    //                 },
    //                 {
    //                     model: State, 
    //                     as: 'state'
    //                 },
    //                 {
    //                     model: Project, 
    //                     as: 'project'
    //                 }
    //             ]
    //     })
    //     } catch (error) {
    //         handleResultError({ message: messageFindFail(this.repository.getTableName()), messageDetail: error });
    //     }
    // }

    async fillterIssue(dataDto:QueryIssueDto){
        try {
            const user = await this.userService.getUser(dataDto.userId);
            if(user.last_workspace_id)
                {
                    return await this.repository.findAll({
                        where: {
                            workspace_id: user.last_workspace_id,
                            ...this.getQueryPriority(dataDto.priorities)
                        },
                        include: [
                            this.getQueryAssignee(dataDto.assignees),
                            this.getQueryCreator(dataDto.createBys),
                            this.getQueryLabel(dataDto.labels),
                            this.getQueryProject(dataDto.projects),
                            this.getQueryState(dataDto.states),
                        ]
                })
            }
            handleResultError({ message: messageFindFail(this.repository.getTableName()), messageDetail: 'last_workspace_id not found!' });
        } catch (error) {
            handleResultError({ message: messageFindFail(this.repository.getTableName()), messageDetail: error });
        }
    }

    getQueryCreator(creators: string[]){
        return (creators && creators.length > 0) ? 
        {
            model: User,
            as: 'creator',
            where:{
                id: creators
            }
        } 
            : 
        {
            model: User,
            as: 'creator'
        }
    }

    getQueryAssignee(assignees:string[]){
        return (assignees && assignees.length > 0) ?
        {
            model: User,
            as: 'assignees',
            where:{
                id: [assignees]
            }
        }:{
            model: User,
            as: 'assignees',
        }
    }

    getQueryLabel(labels:string[]){
        return (labels && labels.length > 0) ?
        {
            model:State, 
            as: 'state',
            where:{
                id:labels
            }
        }:{
            model:State, 
            as: 'state',
        }
    }

    getQueryState(states:string[]){
        return (states && states.length > 0)? {
            model:State, 
            as: 'state',
            where:{
                id: states
            }
        }:{
            model:State, 
            as: 'state',
        }
    }

    getQueryProject(projects:string[]){
        return (projects && projects.length > 0) ?{
            model: Project, 
            as: 'project',
            where:{
                id: projects
            }
        }:{
            model: Project, 
            as: 'project'
        }
    }

    getQueryPriority(priorities:string[]){
        return priorities ? { priority:priorities }:{}
    }
}
