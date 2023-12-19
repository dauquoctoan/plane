import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Repository } from 'sequelize-typescript';
import { BaseService } from 'src/api/Base.service';
import { ProjectMember } from '../entitys/ProjectMember.entity';
import { handleResultError, handleResultSuccess } from 'src/helper/handleresult';
import { User } from 'src/api/user/entitys/User.entity';
import { messageFindFail } from 'src/helper/message.create';
import { UserService } from 'src/api/user/service/User.service';


@Injectable()
export class ProjectMemberService extends BaseService<ProjectMember>{
    constructor(
        @InjectModel(ProjectMember) public repository: Repository<ProjectMember>,
        readonly userService: UserService,
    ) {
        super(repository);
    }
    
    async findMemberByProject(ProjectId: string){
        return this.userService.getUserFromProject(ProjectId);
    }
}