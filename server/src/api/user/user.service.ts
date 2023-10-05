import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './entitys/User.entity';
import { handleResultError, handleResultSuccess } from 'src/helper/handleresult';
import { messageCreateErorr } from 'src/helper/message.create';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User)
        private userModel: typeof User,
    ) { }

    async create(user: CreateUserDto): Promise<IResult>{
        try {
            const result = await this.userModel.create({ ...user });
            return handleResultSuccess(result)
        } catch (error) {
            handleResultError({ message: messageCreateErorr('User'), messageDetail: error });
        }
    }

    findAll() {
        return `This action returns all workspace`;
    }

    findOne(id: number) {
        return `This action returns a #${id} workspace`;
    }

    update(id: number, updateWorkspaceDto: UpdateUserDto) {
        return `This action updates a #${id} workspace`;
    }

    remove(id: number) {
        return `This action removes a #${id} workspace`;
    }
}
