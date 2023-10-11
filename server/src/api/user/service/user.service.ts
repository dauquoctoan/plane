import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '../entitys/User.entity';
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
