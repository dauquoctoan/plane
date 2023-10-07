import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { State } from '../entitys/state.entity';
import { handleResultError, handleResultSuccess } from 'src/helper/handleresult';
import { UpdateStateDto } from '../dto/update-state.dto';
import { CreateStateDto } from '../dto/create-state.dto';
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
