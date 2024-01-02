import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { BaseService } from 'src/api/Base.service';
import { Issue } from '../entitys/Issue.entity';
import { handleResultError } from 'src/helper/handleresult';
import { messageCreateFail, messageFindFail } from 'src/helper/message.create';
import { User } from 'src/api/user/entitys/User.entity';
import { CreateIssueDto, QueryIssueDto } from '../dto/Issue.dto';
import { UserService } from 'src/api/user/service/User.service';
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

    async createIssue(issueItem: CreateIssueDto, idUser: string) {
        try {
            let users = [], labels = [];
            if (issueItem.assignees && issueItem.assignees.length > 0) {
                users = await this.userService.findAll({
                    where: {
                        id: {
                            [Op.in]: issueItem.assignees || ['']
                        }
                    }
                });
            }

            if (issueItem.labels && issueItem.labels.length > 0) {
                labels = await this.labelService.findAll({
                    where: {
                        id: {
                            [Op.in]: issueItem.labels || ['']
                        }
                    }
                })
            }

            const issue = await this.issueRepository.create({ create_by: idUser, ...issueItem } as any)

            await issue.$add('assignees', users);
            await issue.$add('labels', labels);

            return { ...issue.dataValues, assignees: users, labels: labels }
        } catch (error) {
            handleResultError({ message: messageCreateFail(this.repository.getTableName()), messageDetail: error });
        }
    }

    async getIssueByProjectId(projectId: string, userId: string) {
        try {
            const user = await this.userService.getUser(userId);
            if (user.last_workspace_id) {
                return await this.repository.findAll(
                    {
                        where: {
                            workspace_id: user.last_workspace_id,
                            project_id: projectId
                        },
                        include: [
                            {
                                model: Project,
                                as: 'project'
                            },
                            {
                                model: User,
                                as: 'creator',
                            },
                            {
                                model: User,
                                as: 'assignees',
                            },
                            {
                                model: Label,
                                as: 'labels',
                            }
                        ]
                    }
                )
            }

            handleResultError({ message: messageFindFail(this.repository.getTableName()), messageDetail: 'last_workspace_id not found!' });
        } catch (error) {
            handleResultError({ message: messageFindFail(this.repository.getTableName()), messageDetail: error });
        }
    }

    async fillterIssue(dataDto: QueryIssueDto) {
        try {
            const user = await this.userService.getUser(dataDto.userId);
            if (user.last_workspace_id) {
                return await this.repository.findAll({
                    where: {
                        workspace_id: user.last_workspace_id,
                        ...this.getQueryPriority(dataDto.priorities),
                        ...this.getQueryState(dataDto.states),
                    },
                    include: [
                        this.getQueryAssignee(dataDto.assignees),
                        this.getQueryCreator(dataDto.createBys),
                        this.getQueryLabel(dataDto.labels),
                        this.getQueryProject(dataDto.projects),
                    ]
                })
            }
            handleResultError({ message: messageFindFail(this.repository.getTableName()), messageDetail: 'last_workspace_id not found!' });
        } catch (error) {
            handleResultError({ message: messageFindFail(this.repository.getTableName()), messageDetail: error });
        }
    }

    getQueryCreator(creators: string[]) {
        return (creators && creators.length > 0) ?
            {
                model: User,
                as: 'creator',
                where: {
                    id: creators
                }
            }
            :
            {
                model: User,
                as: 'creator'
            }
    }

    getQueryAssignee(assignees: string[]) {
        return (assignees && assignees.length > 0) ?
            {
                model: User,
                as: 'assignees',
                where: {
                    id: [assignees]
                }
            } : {
                model: User,
                as: 'assignees',
            }
    }

    getQueryLabel(labels: string[]) {
        return (labels && labels.length > 0) ?
            {
                model: Label,
                as: 'labels',
                where: {
                    id: [labels]
                }
            } : {
                model: Label,
                as: 'labels'
            }
    }

    getQueryState(states: string[]) {
        return states ? { state_id: states } : {}

        // return (states && states.length > 0)? {
        //     model:State, 
        //     as: 'state',
        //     where:{
        //         id: states
        //     }
        // }:{
        //     model:State, 
        //     as: 'state',
        // }
    }

    getQueryProject(projects: string[]) {
        return (projects && projects.length > 0) ? {
            model: Project,
            as: 'project',
            where: {
                id: projects
            }
        } : {
            model: Project,
            as: 'project'
        }
    }

    getQueryPriority(priorities: string[]) {
        return priorities ? { priority: priorities } : {}
    }
}
