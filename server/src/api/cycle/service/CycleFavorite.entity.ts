import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { BaseService } from 'src/api/Base.service';
import { CycleFavorite } from '../entitys/CycleFavorite.entity';
import { Repository } from 'sequelize-typescript';

@Injectable()
export class CycleFavoriteService extends BaseService<CycleFavorite> {
    constructor(@InjectModel(CycleFavorite) public repository: Repository<CycleFavorite>) {
        super(repository)
    }
}
