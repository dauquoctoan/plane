import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Repository } from 'sequelize-typescript';
import { BaseService } from 'src/api/Base.service';
import { ProjectMember } from '../entitys/ProjectMember.entity';

@Injectable()
export class ProjectMemberService extends BaseService<ProjectMember>{
    constructor(
        @InjectModel(ProjectMember) public repository: Repository<ProjectMember>,
    ) {
        super(repository);
    }
}