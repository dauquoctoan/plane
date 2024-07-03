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
import { messageCreateFail, messageFindFail } from 'src/helper/message.create';
import { UserService } from 'src/api/user/service/user.service';
import { Workspace } from '../entitys/Workspace.entity';
import { WorkspaceMemberService } from './WorkspaceMember.service';
import { User } from 'src/api/user/entitys/User.entity';
import { Op } from 'sequelize';

@Injectable()
export class WorkspaceMemberInviteService extends BaseService<WorkspaceMemberInvite> {
  constructor(
    @InjectModel(WorkspaceMemberInvite)
    public repository: Repository<WorkspaceMemberInvite>,
    private configService: ConfigService,
    private readonly workspaceService: WorkspaceService,
    private readonly workspaceMemberService: WorkspaceMemberService,
    readonly userService: UserService,
  ) {
    super(repository);
  }

  async createsWorkspaceMemberInviteService(
    members: CreateWorkspaceMemberInviteDto[],
  ) {
    const domain = this.configService.get('SERVER_DOMAIN');
    let newMembers: CreateWorkspaceMemberInviteDto[] = [...members];
    try {
      const workspaeMembers = await this.workspaceMemberService.findAll({
        where: {
          [Op.or]: members.map(e => ({
            workspace_id: e.workspace_id,
            '$user.email$': e.email,
          })),
        },
        include: {
          model: User,
          as: 'user',
        },
      });

      if (workspaeMembers) {
        const lsid = workspaeMembers.map(e => e.id);
        const resultUpdate = await this.workspaceMemberService.update(
          { is_active: true },
          {
            id: lsid,
          },
        );
        if (resultUpdate) {
          let lsKey = {};
          workspaeMembers.forEach(e => {
            lsKey[e.workspace_id + e.user.email] = true;
          });

          newMembers = newMembers.filter(e => {
            return !lsKey[e.workspace_id + e.email];
          });
        }
      }

      if (newMembers.length > 0) {
        let lsKey = {};

        const lsContain = await this.findAll({
          where: {
            [Op.or]: newMembers.map(e => ({
              workspace_id: e.workspace_id,
              email: e.email,
            })),
          },
        });

        if (lsContain.length > 0) {
          lsContain.forEach(e => {
            lsKey[e.workspace_id + e.email] = true;
          });

          newMembers = newMembers.filter(e => {
            return !lsKey[e.workspace_id + e.email];
          });
        }

        const resMembers = await this.creates(newMembers);

        if (resMembers && resMembers.length > 0) {
          const workspace = await this.workspaceService.findOneById(
            members[0].workspace_id,
          );
          if (workspace) {
            resMembers.forEach(member => {
              sendMail({
                email: member.email,
                workspaceName: workspace.name,
                href:
                  domain +
                  'confirm-join-workspace?workspaceId=' +
                  workspace.id +
                  '&token=' +
                  member.token,
              });
            });
          }
        }
        return resMembers;
      } else {
        return 1;
      }
    } catch (error) {
      handleResultError({
        message: messageFindFail(this.repository.getTableName()),
        messageDetail: error,
      });
    }
  }

  async getMemberInviteByEmailAndWorkspace(userId: string) {
    try {
      const info = await this.userService.getUser(userId);

      if (info) {
        const resMembers = await this.findAll({
          where: {
            email: info.email,
          },
          include: [
            {
              model: Workspace,
              as: 'workspace',
            },
          ],
          order: [['createdAt', 'DESC']],
        });

        return resMembers;
      }

      handleResultError({
        message: messageFindFail(this.repository.getTableName()),
        messageDetail: 'error invalid user',
      });
    } catch (error) {
      handleResultError({
        message: messageFindFail(this.repository.getTableName()),
        messageDetail: error,
      });
    }
  }

  async joinWrokspaceInWeb(lsId: string[], userId: string) {
    try {
      const workspaceMemberInviteService = await this.repository.findAll({
        where: {
          id: lsId,
        },
      });

      if (workspaceMemberInviteService) {
        const workspaceMembers = await this.workspaceMemberService.creates(
          workspaceMemberInviteService.map(e => {
            return {
              member: userId,
              workspace_id: e.workspace_id,
              role: +e.role,
            };
          }),
        );

        if (workspaceMembers) {
          workspaceMemberInviteService.forEach(e => {
            e.destroy();
          });
        }

        return workspaceMembers;
      }

      handleResultError({
        message: messageCreateFail(this.repository.getTableName()),
        statusCode: 400,
        messageDetail: 'Dont create workspaceMember',
      });
    } catch (error) {
      handleResultError({
        message: messageCreateFail(this.repository.getTableName()),
        statusCode: 450,
        messageDetail: error,
      });
    }
  }
}
