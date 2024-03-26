import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { State } from '../entitys/state.entity';
import { Repository } from 'sequelize-typescript';
import { BaseService } from 'src/api/Base.service';
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

    async findState(id: string, userId: string) {
        return await this.findAll({
            where: {
                [Op.or]: [
                    { project_id: id },
                    { project_id: null },
                ],
                [Op.and]: {
                    [Op.or]: [
                        { created_by: userId },
                        { created_by: null },
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
