import { Injectable } from '@nestjs/common';
import { Repository } from 'sequelize-typescript';
import { WorkspaceMember } from '../entitys/WorkspaceMember.entity';
import { InjectModel } from '@nestjs/sequelize';
import { BaseService } from 'src/api/Base.service';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/api/user/service/User.service';
import { handleResultError, handleResultSuccess } from 'src/helper/handleresult';
import { messageCreateFail } from 'src/helper/message.create';
import { CreateWorkspaceMemberDto } from '../dto/WorkspaceMember.dto';


@Injectable()
export class WorkspaceMemberService extends BaseService<WorkspaceMember> {
    constructor(
        @InjectModel(WorkspaceMember) public repository: Repository<WorkspaceMember>,
        private readonly userService: UserService,
        private jwtService: JwtService
    ) {
        super(repository);
    }

    async createWorkspaceMemberWhenJoin(workspace_id:number, token:string){
        try {
            const info = this.jwtService.verify<{email:string; role: number}>(token);
            if(info && workspace_id){
                const user = await this.userService.findOne({where:{email: info.email}});

                if(!user){
                    handleResultError({message:messageCreateFail(this.repository.getTableName()),messageDetail: 'User not found'})
                }

                const result = await this.repository.create({
                    workspace_id: workspace_id,
                    member: user.id,
                    role: +info.role,
                })

                if(result){
                    user.last_workspace_id = workspace_id
                    await user.save();
                }

                return handleResultSuccess(result);
            }
        } catch (error) {
            handleResultError({message: messageCreateFail(this.repository.getTableName()),statusCode: 200, messageDetail: error})
        }
    }
}
