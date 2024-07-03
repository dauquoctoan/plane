import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '../entitys/User.entity';
import { BaseService } from 'src/api/Base.service';
import { Repository } from 'sequelize-typescript';
import { handleResultError } from 'src/helper/handleresult';
import { messageFindFail } from 'src/helper/message.create';
import { ProjectMember } from 'src/api/project/entitys/ProjectMember.entity';

@Injectable()
export class UserService extends BaseService<User> {
  constructor(
    @InjectModel(User)
    public repository: Repository<User>,
  ) {
    super(repository);
  }

  async getUser(userId: string) {
    try {
      return await this.repository.findByPk(userId);
    } catch (error) {
      handleResultError({
        message: messageFindFail(this.repository.getTableName()),
        messageDetail: error,
      });
    }
  }

  async getUserFromProject(projectId: string) {
    try {
      return this.repository.findAll({
        include: [
          {
            model: ProjectMember,
            as: 'project_members',
            where: {
              project_id: projectId,
            },
            attributes: [],
          },
        ],
      });
    } catch (error) {
      handleResultError({
        message: messageFindFail(this.repository.getTableName()),
        messageDetail: error,
      });
    }
  }

  async getUserFromWorkspace(workspaceId: string) {
    try {
      return this.repository.findAll({
        include: [
          {
            model: ProjectMember,
            as: 'project_members',
            where: {
              workspace_id: workspaceId,
            },
            attributes: [],
          },
        ],
      });
    } catch (error) {
      handleResultError({
        message: messageFindFail(this.repository.getTableName()),
        messageDetail: error,
      });
    }
  }
}
