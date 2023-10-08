import { Injectable } from '@nestjs/common';
import { IssueViewFavorite } from '../entitys/IssueViewFavorite.entity';
import { Repository } from 'sequelize-typescript';
import { BaseService } from 'src/api/Base.service';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class IssueViewFavoriteService extends BaseService {
    constructor(@InjectModel(IssueViewFavorite) public repository: Repository<IssueViewFavorite>) {
        super(repository);
    }
}