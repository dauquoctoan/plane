import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Repository } from 'sequelize-typescript';
import { BaseService } from 'src/api/Base.service';
import { Project } from '../entitys/Project.entity';

@Injectable()
export class ProjectService extends BaseService {
    constructor(@InjectModel(Project) public repository: Repository<Project>) {
        super(repository);
    }
}
