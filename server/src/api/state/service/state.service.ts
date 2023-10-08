import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { State } from '../entitys/State.entity';
import { Repository } from 'sequelize-typescript';
import { BaseService } from 'src/api/Base.service';


@Injectable()
export class StateService extends BaseService {
    constructor(
        @InjectModel(State)
        private stateModel: Repository<State>,
    ) {
        super(stateModel)
    }
}
