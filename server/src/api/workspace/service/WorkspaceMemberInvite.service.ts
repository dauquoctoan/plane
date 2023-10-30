import { Injectable } from '@nestjs/common';
import { Repository } from 'sequelize-typescript';
import { WorkspaceMemberInvite } from '../entitys/WorkspaceMemberInvite.entity';
import { InjectModel } from '@nestjs/sequelize';
import { BaseService } from 'src/api/Base.service';


@Injectable()
export class WorkspaceMemberInviteService extends BaseService<WorkspaceMemberInvite> {
    constructor(
        @InjectModel(WorkspaceMemberInvite) public repository: Repository<WorkspaceMemberInvite>,
    ) {
        super(repository);
    }
}
