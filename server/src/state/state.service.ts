import { BadRequestException, HttpException, HttpStatus, Injectable, ExceptionFilter } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { State } from './schema/state.model';
import { StateDto } from './dto/state.dto';
import { handleResultError, handleResultSuccess } from 'src/helper/handleresult';


@Injectable()
export class StateService {
    constructor(
        @InjectModel(State)
        private stateModel: typeof State,
    ) {}

    async addOne(state: StateDto): Promise<IResult> {
        try {
            const states = {...state}
            const result = await this.stateModel.create(states);
            return handleResultSuccess(result);
        } catch (error) {
            handleResultError({message: 'Error dont add state',statusCode: HttpStatus.INTERNAL_SERVER_ERROR,messageDetail:error})
        }
    }
    
    async findAll(): Promise<State[]> {
        return this.stateModel.findAll();
    }
    
    findOne(id: string): Promise<State> {
        return this.stateModel.findOne({
            where: {
            id,
            },
        });
    }
    
    async remove(id: string): Promise<void> {
        const user = await this.findOne(id);
        await user.destroy();
    }
}
