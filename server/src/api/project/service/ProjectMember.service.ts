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
        try {
            return await this.userService.getUserFromProject(ProjectId);
        } catch (error) {
            handleResultError({message: messageFindFail(this.repository.getTableName()),messageDetail: error})
        }
    }

    async findMembers(query:{projectId?:string}, userId: string){
        try {
            if(query.projectId){
                return await this.userService.getUserFromProject(query.projectId);
            }

            else{
                const info =  await this.userService.findOneById(userId)
                if(info.last_workspace_id){
                    return await this.userService.getUserFromWorkspace(info.last_workspace_id);
                }
            }
            
            handleResultError({message: messageFindFail(this.repository.getTableName()), messageDetail: 'error'})
        } catch (error) {
            handleResultError({message: messageFindFail(this.repository.getTableName()), messageDetail: error})
        }
    }
}