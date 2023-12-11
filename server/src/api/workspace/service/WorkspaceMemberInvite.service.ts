import { Injectable } from '@nestjs/common';
import { Repository } from 'sequelize-typescript';
import { WorkspaceMemberInvite } from '../entitys/WorkspaceMemberInvite.entity';
import { InjectModel } from '@nestjs/sequelize';
import { BaseService } from 'src/api/Base.service';
import { ConfigService } from '@nestjs/config';
import { CreateWorkspaceMemberInviteDto } from '../dto/WorkspaceMemberInvite.dto';
import { WorkspaceService } from './workspace.service';
import { sendMail } from 'src/helper/sendmail';
import { handleResultError } from 'src/helper/handleresult';
import { messageCreateFail } from 'src/helper/message.create';


@Injectable()
export class WorkspaceMemberInviteService extends BaseService<WorkspaceMemberInvite> {
    constructor(
        @InjectModel(WorkspaceMemberInvite) public repository: Repository<WorkspaceMemberInvite>,
        private configService: ConfigService,
        private readonly workspaceService: WorkspaceService
    ) {
        super(repository);
    }

    async createsWorkspaceMemberInviteService(members:CreateWorkspaceMemberInviteDto[]){
        const domain = this.configService.get('SERVER_DOMAIN');
        try {
            const resMembers = await this.creates(members);
            if(resMembers && resMembers.length>0){
                const workspace = await this.workspaceService.findOneById(members[0].workspace_id)
                if(workspace){
                    resMembers.forEach((member)=>{
                        sendMail({email:member.email, workspaceName: workspace.name, href: domain +'confirm-join-workspace?workspaceId='+ workspace.id +'&token=' + member.token})
                    })
                }
            }
            return resMembers;
        } catch (error) {
            handleResultError({message:messageCreateFail(this.repository.getTableName()),messageDetail:error})
        }
    }
}
