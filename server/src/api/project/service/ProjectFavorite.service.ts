import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Repository } from 'sequelize-typescript';
import { BaseService } from 'src/api/Base.service';
import { ProjectFavorite } from '../entitys/rojectFavorite.entity';

@Injectable()
export class ProjectFavoriteService extends BaseService<ProjectFavorite>{
    constructor(
        @InjectModel(ProjectFavorite) public repository: Repository<ProjectFavorite>,
    ) {
        super(repository);
    }
}
