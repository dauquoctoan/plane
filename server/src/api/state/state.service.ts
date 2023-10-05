import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { State } from './entitys/state.entity';
import { handleResultError, handleResultSuccess } from 'src/helper/handleresult';
import { UpdateStateDto } from './dto/update-state.dto';
import { CreateStateDto } from './dto/create-state.dto';
import { Repository } from 'sequelize-typescript';


@Injectable()
export class StateService {
    constructor(
        @InjectModel(State)
        private stateModel: Repository<State>,
    ) { }
    
    async create(state: CreateStateDto): Promise<IResult> {
        try {
            const result = await this.stateModel.create({ ...state });
            return handleResultSuccess(result);
        } catch (error) {
            handleResultError({ message: 'Error dont add state', statusCode: HttpStatus.INTERNAL_SERVER_ERROR, messageDetail: error })
        }
    }

    async findAll(): Promise<State[]> {
        return this.stateModel.findAll();
    }

    findOne(id: number): Promise<State> {
        return this.stateModel.findOne({
            where: {
                id,
            },
        });
    }

    async remove(id: number): Promise<void> {
        const user = await this.findOne(id);
        await user.destroy();
    }

    update(id: number, updateWorkspaceDto: UpdateStateDto) {
        return `This action updates a #${id} workspace`;
    }
}
