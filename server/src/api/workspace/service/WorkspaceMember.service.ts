import { Injectable } from '@nestjs/common';
import { Repository } from 'sequelize-typescript';
import { WorkspaceMember } from '../entitys/WorkspaceMember.entity';
import { InjectModel } from '@nestjs/sequelize';
import { BaseService } from 'src/api/Base.service';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/api/user/service/user.service';
import {
  handleResultError,
  handleResultSuccess,
} from 'src/helper/handleresult';
import { messageCreateFail, messageFindFail } from 'src/helper/message.create';
import { User } from 'src/api/user/entitys/User.entity';

@Injectable()
export class WorkspaceMemberService extends BaseService<WorkspaceMember> {
  constructor(
    @InjectModel(WorkspaceMember)
    public repository: Repository<WorkspaceMember>,
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) {
    super(repository);
  }

  async createWorkspaceMemberWhenJoin(workspace_id: string, token: string) {
    try {
      const info = this.jwtService.verify<{ email: string; role: number }>(
        token,
      );
      if (info && workspace_id) {
        const user = await this.userService.findOne({
          where: { email: info.email },
        });

        if (!user) {
          handleResultError({
            message: messageCreateFail(this.repository.getTableName()),
            messageDetail: 'User not found',
          });
        }

        const result = await this.repository.create({
          workspace_id: workspace_id,
          member: user.id,
          role: +info.role,
        });

        if (result) {
          user.last_workspace_id = workspace_id;
          await user.save();
        }

        return handleResultSuccess(result);
      }
    } catch (error) {
      handleResultError({
        message: messageCreateFail(this.repository.getTableName()),
        statusCode: 500,
        messageDetail: error,
      });
    }
  }

  async findMemberFromWorkspace(userId: string) {
    try {
      const info = await this.userService.getUser(userId);
      if (info) {
        return this.repository.findAll({
          where: {
            workspace_id: info.last_workspace_id,
            is_active: true,
          },
          include: [{ model: User, as: 'user' }],
          order: [['role', 'DESC']],
        });
      }
      handleResultError({
        message: messageFindFail(this.repository.getTableName()),
        statusCode: 500,
        messageDetail: 'invalid user',
      });
    } catch (error) {
      handleResultError({
        message: messageFindFail(this.repository.getTableName()),
        statusCode: 500,
        messageDetail: error,
      });
    }
  }

  async removeMember(idRemove: string, userId: string) {
    try {
      const info = await this.userService.getUser(userId);

      if (info) {
        const requestingItem = await this.repository.findOne({
          where: {
            member: info.id,
            workspace_id: info.last_workspace_id,
          },
        });

        const deleteItem = await this.repository.findOne({
          where: {
            member: idRemove,
            workspace_id: info.last_workspace_id,
          },
        });

        if (requestingItem && deleteItem) {
          if (requestingItem.role > deleteItem.role) {
            return this.repository.update(
              { is_active: false },
              { where: { id: deleteItem.id } },
            );
          } else {
            handleResultError({
              message: messageFindFail(this.repository.getTableName()),
              statusCode: 500,
              messageDetail: 'You do not have permission to remove this user',
            });
          }
        }
      }

      handleResultError({
        message: messageFindFail(this.repository.getTableName()),
        statusCode: 500,
        messageDetail: 'invalid user',
      });
    } catch (error) {
      handleResultError({
        message: messageFindFail(this.repository.getTableName()),
        statusCode: 500,
        messageDetail: error,
      });
    }
  }
}
