import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Repository } from 'sequelize-typescript';
import { BaseService } from 'src/api/Base.service';
import { ProjectMember } from '../entitys/ProjectMember.entity';
import { handleResultError } from 'src/helper/handleresult';
import { messageFindFail } from 'src/helper/message.create';
import { UserService } from 'src/api/user/service/user.service';
import { User } from 'src/api/user/entitys/User.entity';

@Injectable()
export class ProjectMemberService extends BaseService<ProjectMember> {
  constructor(
    @InjectModel(ProjectMember) public repository: Repository<ProjectMember>,
    readonly userService: UserService,
  ) {
    super(repository);
  }

  async findMemberByProject(ProjectId: string) {
    try {
      return await this.repository.findAll({
        where: {
          project_id: ProjectId,
        },
        include: [
          {
            model: ProjectMember,
            as: 'user',
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

  async me(query: { projectId?: string }, userId: string) {
    try {
      const info = await this.userService.findOneById(userId);
      if (info) {
        const result = await this.repository.findAll({
          where: {
            project_id: query.projectId,
            workspace_id: info.last_workspace_id,
          },
          include: [
            {
              model: User,
              as: 'user',
              where: {
                id: userId,
              },
            },
          ],
        });
        return result[0];
      }
      handleResultError({
        message: messageFindFail(this.repository.getTableName()),
        messageDetail: 'error',
      });
    } catch (error) {
      handleResultError({
        message: messageFindFail(this.repository.getTableName()),
        messageDetail: error,
      });
    }
  }

  async findMembers(query: { projectId?: string }, userId: string) {
    try {
      const info = await this.userService.findOneById(userId);
      if (info) {
        return await this.repository.findAll({
          where: {
            project_id: query.projectId,
            workspace_id: info.last_workspace_id,
          },
          include: [
            {
              model: User,
              as: 'user',
            },
          ],
        });
      }
      handleResultError({
        message: messageFindFail(this.repository.getTableName()),
        messageDetail: 'error',
      });
    } catch (error) {
      handleResultError({
        message: messageFindFail(this.repository.getTableName()),
        messageDetail: error,
      });
    }
  }

  async getProjectView(query: { projectId?: string }, userId: string) {
    try {
      const info = await this.userService.findOneById(userId);
      if (info) {
        return await this.repository.findOne({
          where: {
            project_id: query.projectId,
            workspace_id: info.last_workspace_id,
            member: userId,
          },
        });
      }
      handleResultError({
        message: messageFindFail(this.repository.getTableName()),
        messageDetail: 'error',
      });
    } catch (error) {
      handleResultError({
        message: messageFindFail(this.repository.getTableName()),
        messageDetail: error,
      });
    }
  }

  async joinProject(userId: string, projectId: string, role: number) {
    try {
      const info = await this.userService.getUser(userId);
      if (info) {
        return this.create({
          member: info.id,
          project_id: projectId,
          role: role || 5,
          workspace_id: info.last_workspace_id,
        });
      }
      handleResultError({
        message: messageFindFail(this.repository.getTableName()),
        messageDetail: 'error',
      });
    } catch (error) {
      handleResultError({
        message: messageFindFail(this.repository.getTableName()),
        messageDetail: error,
      });
    }
  }
}
