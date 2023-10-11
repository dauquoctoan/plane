import { Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from '../dto/User.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '../entitys/User.entity';
import { handleResultError, handleResultSuccess } from 'src/helper/handleresult';
import { messageCreateErorr } from 'src/helper/message.create';
import { BaseService } from 'src/api/Base.service';
import { Repository } from 'sequelize-typescript';

@Injectable()
export class UserService extends BaseService {
    constructor(
        @InjectModel(User)
        public repository: Repository<User>,
    ) {
        super(repository)
    }
}
