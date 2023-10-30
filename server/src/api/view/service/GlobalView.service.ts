import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/api/Base.service';
import { GlobalView } from '../entitys/GlobalView.entity';
import { Repository } from 'sequelize-typescript';
import { InjectRepository } from '@nestjs/typeorm';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class GlobalViewService extends BaseService<GlobalView> {
    constructor(@InjectModel(GlobalView) public repository: Repository<GlobalView>) {
        super(repository)
    }
}
