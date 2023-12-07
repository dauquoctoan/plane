import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { State } from '../entitys/State.entity';
import { Repository } from 'sequelize-typescript';
import { BaseService } from 'src/api/Base.service';
import { CreateStateDto } from '../dto/State.dto';
import { Op } from 'sequelize';


@Injectable()
export class StateService extends BaseService<State> {
    constructor(
        @InjectModel(State)
        private stateModel: Repository<State>,
    ) {
        super(stateModel)
    }

    createAll() {
        return this.creates([
            {
                "name": "Backlog",
                "color": "#A3A3A3",
                "group": "backlog",
                "default": true
            },
            {
                "name": "Cancelled",
                "color": "#EF4444",
                "group": "cancelled",
                "default": false,
            },
            {
                "name": "Done",
                "color": "#16A34A",
                "group": "completed",
                "default": false
            },
            {
                "name": "In Progress",
                "color": "#F59E0B",
                "group": "started",
                "default": false
            },
            {
                "name": "Todo",
                "color": "#3A3A3A",
                "group": "unstarted",
                "default": false
            },
        ])
    }

    async findState(id: number, userId: string) {
        return await this.findAll({
            where: {
                [Op.or]: [
                    { project_id: +id },
                    { project_id: null },
                ],
                [Op.and]: {
                    [Op.or]: [
                        { created_by: userId },
                        { created_by: null },
                    ],
                },
            },
            order:[['created_by', 'ASC']]
        })
    }
}
