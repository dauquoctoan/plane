import { Injectable } from '@nestjs/common';
import { Repository } from 'sequelize-typescript';
import { WorkspaceMember } from '../entitys/WorkspaceMember.entity';
import { InjectModel } from '@nestjs/sequelize';
import { BaseService } from 'src/api/Base.service';


@Injectable()
export class WorkspaceMemberService extends BaseService<WorkspaceMember> {
    constructor(
        @InjectModel(WorkspaceMember) public repository: Repository<WorkspaceMember>,
    ) {
        super(repository);
    }
}
