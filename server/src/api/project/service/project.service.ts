import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { BaseService } from 'src/api/Base.service';
import { Project } from '../entitys/Project.entity';
import { handleResultError } from 'src/helper/handleresult';
import { messageCreateFail, messageFindFail } from 'src/helper/message.create';
import { Workspace } from 'src/api/workspace/entitys/Workspace.entity';
import { User } from 'src/api/user/entitys/User.entity';
import { UserService } from 'src/api/user/service/User.service';
import { Sequelize } from 'sequelize';

@Injectable()
export class ProjectService extends BaseService<Project>{
    constructor(@InjectModel(Project) public repository: typeof Project,
    readonly userService: UserService
    ) {
        super(repository);
    }

    async getProjectByUserId(userId: string) {
        try {
            const user = await this.userService.findOneById(userId)
            if(user){
                return await this.repository.findAll({ where: { workspace_id: user.last_workspace_id }, attributes: {
                    include: [
                      [
                        Sequelize.literal(
                          `(SELECT 1 FROM projectmembers WHERE
                            projectmembers.id = Project.id AND
                              projectmembers.member = '${userId}' 
                            )
                          `
                        ),
                        'is_member',
                      ],
                    ],
                  }, include: [{ model: User, as: 'created_by_user' }] });
            }
            handleResultError({ message: messageFindFail(this.repository.getTableName()), messageDetail: 'Invalid user' });
        } catch (error) {
            handleResultError({ message: messageFindFail(this.repository.getTableName()), messageDetail: error });
        }
    }

}
