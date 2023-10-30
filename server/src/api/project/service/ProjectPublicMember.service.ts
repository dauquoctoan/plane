import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { BaseService } from 'src/api/Base.service';
import { ProjectPublicMember } from '../entitys/ProjectPublicMember.entity';
import { Repository } from 'sequelize-typescript';

@Injectable()
export class ProjectPublicMemberService extends BaseService<ProjectPublicMember> {
    constructor(
        @InjectModel(ProjectPublicMember) public repository: Repository<ProjectPublicMember>,
    ) {
        super(repository);
    }
}