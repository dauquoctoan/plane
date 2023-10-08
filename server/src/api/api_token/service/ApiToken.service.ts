import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { BaseService } from 'src/api/Base.service';
import { APIToken } from '../entitys/APIToken.entity';
import { Repository } from 'sequelize-typescript';

@Injectable()
export class ApiTokenService extends BaseService {
    constructor(@InjectModel(APIToken) public repository: Repository<APIToken>) {
        super(repository)
    }
}
