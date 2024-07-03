import { Injectable } from '@nestjs/common';
import { Repository } from 'sequelize-typescript';
import { Workspace } from '../entitys/Workspace.entity';
import { InjectModel } from '@nestjs/sequelize';
import { BaseService } from 'src/api/Base.service';
import { User } from 'src/api/user/entitys/User.entity';
import {
  handleResultError,
  handleResultSuccess,
} from 'src/helper/handleresult';
import { messageCreateFail, messageFindFail } from 'src/helper/message.create';
import { CreateWorkspaceDto } from '../dto/Workspace.dto';
import { UserService } from 'src/api/user/service/user.service';
import { WorkspaceMember } from '../entitys/WorkspaceMember.entity';
import { WorkspaceMemberService } from './WorkspaceMember.service';

@Injectable()
export class WorkspaceService extends BaseService<Workspace> {
  constructor(
    @InjectModel(Workspace) public repository: Repository<Workspace>,
    private readonly userService: UserService,
    private readonly workspaceMemberService: WorkspaceMemberService,
  ) {
    super(repository);
  }

  async findWorkspaceAndUser(id: string) {
    try {
      return await this.repository.findAll({ where: { owner: id } });
    } catch (error) {
      handleResultError({
        message: messageFindFail(this.repository.getTableName()),
        messageDetail: error,
      });
    }
  }

  async findWorkspaceByUser(id: string) {
    try {
      return await this.repository.findAll({
        include: [
          {
            model: WorkspaceMember,
            as: 'workspace_members',
            where: {
              member: id,
            },
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

  async createWorkspace(id: string, workspace: CreateWorkspaceDto) {
    try {
      const resWorkspace = await this.repository.create(workspace);
      if (workspace) {
        await this.workspaceMemberService.create({
          role: 20,
          member: id,
          workspace_id: resWorkspace.id,
        });
        await this.userService.updateById(id, {
          last_workspace_id: resWorkspace.id,
        });
        return workspace;
      }
    } catch (error) {
      handleResultError({
        message: messageCreateFail('workspace'),
        data: null,
        statusCode: 500,
        messageDetail: error,
      });
    }
  }
}
