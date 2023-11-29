import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { BaseService } from 'src/api/Base.service';
import { Project } from '../entitys/Project.entity';
import { handleResultError } from 'src/helper/handleresult';
import { messageCreateFail, messageFindFail } from 'src/helper/message.create';
import { Workspace } from 'src/api/workspace/entitys/Workspace.entity';
import { User } from 'src/api/user/entitys/User.entity';

@Injectable()
export class ProjectService extends BaseService<Project>{
    constructor(@InjectModel(Project) public repository: typeof Project) {
        super(repository);
    }

    async getProjectByUserId(userId: string, workspaceId: string) {
        try {
            return await this.repository.findAll({ where: { created_by: userId, workspace_id: workspaceId }, include: [{ model: User, as: 'created_by_user' }] });
        } catch (error) {
            handleResultError({ message: messageFindFail(this.repository.getTableName()), messageDetail: error });
        }
    }

}
