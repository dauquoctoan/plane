import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'sequelize-typescript';
import { BaseService } from 'src/api/Base.service';
import { ProjectDeployBoard } from '../entitys/project-deploy-board.entity';

@Injectable()
export class ProjectDeployBoardService extends BaseService {
    constructor(
        @InjectRepository(ProjectDeployBoard) public projectDeployBoard: Repository<ProjectDeployBoard>,
    ) {
        super(projectDeployBoard);
    }
}
