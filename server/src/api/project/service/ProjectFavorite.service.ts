import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ProjectFavorite } from '../entitys/rojectFavorite.entity';
import { Repository } from 'sequelize-typescript';
import { BaseService } from 'src/api/Base.service';

@Injectable()
export class ProjectFavoriteService extends BaseService {
    constructor(
        @InjectModel(ProjectFavorite) public repository: Repository<ProjectFavorite>,
    ) {
        super(repository);
    }
}
