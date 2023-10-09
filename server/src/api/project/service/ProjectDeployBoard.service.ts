import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'sequelize-typescript';
import { BaseService } from 'src/api/Base.service';
import { ProjectDeployBoard } from '../entitys/ProjectDeployBoard.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class ProjectDeployBoardService extends BaseService {
    constructor(
        @InjectModel(ProjectDeployBoard) public repository: Repository<ProjectDeployBoard>,
    ) {
        super(repository);
    }
}
