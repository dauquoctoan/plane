import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { State } from '../entitys/state.entity';
import { Repository } from 'sequelize-typescript';
import { BaseService } from 'src/api/Base.service';
import { Op} from 'sequelize';
import { UserService } from 'src/api/user/service/user.service';
import { handleResultError } from 'src/helper/handleresult';
import { messageFindFail } from 'src/helper/message.create';
import { Issue } from 'src/api/issue/entitys/Issue.entity';
import { User } from 'src/api/user/entitys/User.entity';
import sequelize from 'sequelize';
import {getQueryTime } from 'src/helper/date';
import { TtypeDate } from 'src/types/date.types';


@Injectable()
export class StateService extends BaseService<State> {
    constructor(
        @InjectModel(State)
        private stateModal: Repository<State>,
        private userService: UserService,
    ) {
        super(stateModal)
    }
    
    async assignedByState(userId:string, typeDate: TtypeDate ){
        try {
            const info = await this.userService.getUser(userId);
            return await this.repository.findAll({
                attributes: ['group', [sequelize.fn('COUNT', sequelize.col('issues.id')), 'total']],
                include: [{
                  model: Issue,
                  attributes: [],
                    where:{
                        workspace_id: info.last_workspace_id,
                        ...getQueryTime(typeDate)
                    },
                    required: false, 
                    include:[
                        {
                            model: User,
                            as: 'assignees',
                            attributes: [],
                            required: true, 
                            where:{
                                id: info.id
                            },
                            through: { attributes: [] }
                        }
                  ]
                }],
                group: ['group'],
                raw: true,
              })
              
        } catch (error) {
            handleResultError({ message: messageFindFail(this.repository.getTableName()), messageDetail: error });
        }
    }


    createAll() {
        return this.creates([
            {
                "name": "Backlog",
                "color": "#A3A3A3",
                "group": "backlog",
                'sequence': 1000,
                "default": true
            },
            {
                "name": "Todo",
                "color": "#3A3A3A",
                "group": "unstarted",
                'sequence': 2000,
                "default": false
            },
            {
                "name": "In Progress",
                "color": "#F59E0B",
                "group": "started",
                'sequence': 3000,
                "default": false
            },
            {
                "name": "Done",
                "color": "#16A34A",
                "group": "completed",
                'sequence': 4000,
                "default": false
            },
            {
                "name": "Cancelled",
                "color": "#EF4444",
                "group": "cancelled",
                'sequence': 5000,
                "default": false,
            },
        ])
    }

    async findState(id: string, userId: string, isUser:boolean = false) {
        return await this.findAll({
            where: {
                [Op.or]: [
                    { project_id: id },
                    { project_id: null },
                ],
                [Op.and]: {
                    [Op.or]: [
                        { created_by: userId },
                        (isUser?{ created_by: null }:{}),
                    ],
                },
            },
            order: [['created_by', 'DESC'], ['sequence', 'ASC']]
        })
    }

    async findDefaultState() {
        return await this.findAll({
            where: {
                project_id: null,
                created_by: null,
            },
            order: [['created_by', 'ASC'], ['sequence', 'ASC']]
        })
    }
}
