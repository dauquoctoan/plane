import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Repository } from 'sequelize-typescript';
import { BaseService } from 'src/api/Base.service';
import { Cycle } from '../entitys/Cycle.entity';
import { CreateCycleDto } from '../dto/Cycle.dto';
import { handleResultError } from 'src/helper/handleresult';
import { messageCreateFail, messageFindFail } from 'src/helper/message.create';
import { CycleIssue } from '../entitys/CycleIssue.entity';
import { Issue } from 'src/api/issue/entitys/Issue.entity';
import sequelize from 'sequelize';
import { UserService } from 'src/api/user/service/user.service';
import { State } from 'src/api/state/entitys/state.entity';

@Injectable()
export class CycleService extends BaseService<Cycle> {
    constructor(
        @InjectModel(Cycle) public repository: Repository<Cycle>,
        readonly userService: UserService,
    ) {
        super(repository)
    }

    async createCycle(projectId: string, userId:string, cycleData: CreateCycleDto){
       try {
        const user = await this.userService.findOneById(userId);

        if(user){
            return await this.repository.create({...cycleData, project_id:projectId, workspace_id: user.last_workspace_id, owned_by: userId})
        }

        handleResultError({ message: messageCreateFail(this.repository.getTableName()), messageDetail: 'Invalid user' });
       } catch (error) {
           handleResultError({ message: messageCreateFail(this.repository.getTableName()), messageDetail: 'Invalid user' });
       }
    }

    async findCycleByProject(projectId:string, userId:string){
        try {
            const user = await this.userService.findOneById(userId);
            if(user){
                return await this.repository.findAll({
                    attributes: {
                        include:[
                            [sequelize.fn('COUNT', sequelize.col('cycle_issues.id')), 'total'],
                            [sequelize.literal('COUNT(CASE WHEN `cycle_issues->issue->state`.`group` = "completed" THEN `cycle_issues->issue->state`.`id` END)'), 'done']
                        ]
                    },
                    include: [
                      {
                        model: CycleIssue,
                        attributes: [],
                        required: false, 
                        include:[
                            {
                                model: Issue,
                                attributes: [],
                                required: false,
                                include: [
                                    {
                                      model: State, 
                                      as: 'state',
                                      attributes: [],
                                      required: false,
                                    },
                                ],
                            },
                        ]
                      },
                    ],
                    where: {
                      workspace_id: user.last_workspace_id,
                      project_id: projectId
                    },
                    group: ['Cycle.id'],
                  });
            }
            handleResultError({ message: messageFindFail(this.repository.getTableName()), messageDetail: 'Invalid user' });
        } catch (error) {
            handleResultError({ message: messageFindFail(this.repository.getTableName()), messageDetail: error });
        }
    }
}
