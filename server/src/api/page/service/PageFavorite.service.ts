import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/api/Base.service';
import { PageFavorite } from '../entitys/PageFavorite.entity';
import { Repository } from 'sequelize-typescript';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class PageFavoriteService extends BaseService {
    constructor(@InjectModel(PageFavorite) public repository: Repository<PageFavorite>) {
        super(repository)
    }
}