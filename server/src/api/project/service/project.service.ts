import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { BaseService } from 'src/api/Base.service';
import { Project } from '../entitys/Project.entity';
import {
  handleResultError,
  handleResultSuccess,
} from 'src/helper/handleresult';
import { messageCreateFail, messageFindFail } from 'src/helper/message.create';
import { User } from 'src/api/user/entitys/User.entity';
import { UserService } from 'src/api/user/service/user.service';
import { Sequelize } from 'sequelize';
import { CreateProjectDto } from '../dto/project.dto';
import { ProjectMemberService } from './ProjectMember.service';
import { CreateProjectMemberDto } from '../dto/ProjectMember.dto';
import { ProjectFavorite } from '../entitys/projectFavorite.entity';
import { Estimate } from 'src/api/estimate/entitys/Estimate.entity';

@Injectable()
export class ProjectService extends BaseService<Project> {
  constructor(
    @InjectModel(Project) public repository: typeof Project,
    readonly userService: UserService,
    readonly projectMemberService: ProjectMemberService,
  ) {
    super(repository);
  }

  async getProjectByUserId(userId: string) {
    try {
      const user = await this.userService.findOneById(userId);
      if (user) {
        return await this.repository.findAll({
          where: { workspace_id: user.last_workspace_id },
          attributes: {
            include: [
              [
                Sequelize.literal(
                  `(SELECT 1 FROM ProjectMembers WHERE
                              ProjectMembers.project_id = Project.id AND
                              ProjectMembers.member = '${userId}' 
                            )
                          `,
                ),
                'is_member',
              ],
              [
                Sequelize.literal(
                    `(SELECT 1 FROM ProjectFavorites WHERE
                      ProjectFavorites.project_id = Project.id AND
                      ProjectFavorites.user_id = '${userId}' 
                    )
                  `,
                ),
                'is_favorite',
              ],
            ],
          },
          include: [
            { model: User, as: 'created_by_user' },
            {
              model: ProjectFavorite,
              // attributes: [],
              // required: false,
              as: 'project_favorite'
            },
          ],
          //raw: true,
          // group: ['Project.id', 'project_favorites.user_id'],
          order: [['createdAt', 'DESC']],
        });
      }
      handleResultError({
        message: messageFindFail(this.repository.getTableName()),
        messageDetail: 'Invalid user',
      });
    } catch (error) {
      handleResultError({
        message: messageFindFail(this.repository.getTableName()),
        messageDetail: error,
      });
    }
  }

  async getProjectByProjectId(userId: string, projectId: string) {
    try {
      const user = await this.userService.findOneById(userId);
      if (user) {
        return await this.repository.findAll({
          where: { workspace_id: user.last_workspace_id, id: projectId },
          include: [{ model: User, as: 'created_by_user' }],
          order: [['createdAt', 'DESC']],
        });
      }
      handleResultError({
        message: messageFindFail(this.repository.getTableName()),
        messageDetail: 'Invalid user',
      });
    } catch (error) {
      handleResultError({
        message: messageFindFail(this.repository.getTableName()),
        messageDetail: error,
      });
    }
  }

  async createProject(projectData: CreateProjectDto, userId: string) {
    try {
      const user = await this.userService.findOneById(userId);
      const project = await this.repository.create({
        ...projectData,
        project_lead: userId,
        network: projectData.network,
      });
      if (user && project) {
        await this.projectMemberService.create<CreateProjectMemberDto>({
          member: user.id,
          project_id: project.id,
          role: 20,
          workspace_id: project.workspace_id,
        });
      }
      return project;
    } catch (error) {
      handleResultError({
        message: messageCreateFail(this.repository.getTableName()),
        statusCode: 500,
        messageDetail: error,
      });
    }
  }

  async getProjectFavorite(userId: string) {
    try {
      const info = await this.userService.getUser(userId);
      return handleResultSuccess(
        await this.repository.findAll({
          include: [
            {
              model: ProjectFavorite,
              where: {
                user_id: info.id,
                workspace_id: info.last_workspace_id,
              },
            },
          ],
        }),
      );
    } catch (error) {
      handleResultError({
        message: messageFindFail(this.repository.getTableName()),
        messageDetail: error,
      });
    }
  }
}
