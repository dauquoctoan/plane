import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Repository } from 'sequelize-typescript';
import { BaseService } from 'src/api/Base.service';
import { AnalyticView } from '../entitys/AnalyticView.entity';
import { UserService } from 'src/api/user/service/user.service';

@Injectable()
export class AnalyticViewService extends BaseService<AnalyticView> {
    constructor(@InjectModel(
        AnalyticView) public repository: Repository<AnalyticView>,
        private readonly userService: UserService,
    ) {
        super(repository)
    }
}
