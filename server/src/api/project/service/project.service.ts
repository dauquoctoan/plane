import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { BaseService } from 'src/api/Base.service';
import { Project } from '../entitys/Project.entity';
import { handleResultError } from 'src/helper/handleresult';
import { messageCreateFail, messageFindFail } from 'src/helper/message.create';
import { User } from 'src/api/user/entitys/User.entity';
import { UserService } from 'src/api/user/service/User.service';
import { Sequelize } from 'sequelize';
import { CreateProjectDto } from '../dto/Project.dto';
import { ProjectMemberService } from './ProjectMember.service';
import { CreateProjectMemberDto } from '../dto/ProjectMember.dto';

@Injectable()
export class ProjectService extends BaseService<Project>{
  constructor(@InjectModel(Project) public repository: typeof Project,
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
                  `(SELECT 1 FROM projectmembers WHERE
                              projectmembers.project_id = Project.id AND
                              projectmembers.member = '${userId}' 
                            )
                          `
                ),
                'is_member',
              ],
            ],
          },
          include: [{ model: User, as: 'created_by_user' }],
          order: [['createdAt', 'DESC']]
        });
      }
      handleResultError({ message: messageFindFail(this.repository.getTableName()), messageDetail: 'Invalid user' });
    } catch (error) {
      handleResultError({ message: messageFindFail(this.repository.getTableName()), messageDetail: error });
    }
  }

  async getProjectByProjectId(userId: string, projectId: string) {
    try {
      const user = await this.userService.findOneById(userId);
      if (user) {
        return await this.repository.findAll({
          where: { workspace_id: user.last_workspace_id, id: projectId },
          include: [{ model: User, as: 'created_by_user' }],
          order: [['createdAt', 'DESC']]
        });
      }
      handleResultError({ message: messageFindFail(this.repository.getTableName()), messageDetail: 'Invalid user' });
    } catch (error) {
      handleResultError({ message: messageFindFail(this.repository.getTableName()), messageDetail: error });
    }
  }

  async createProject(projectData: CreateProjectDto, userId: string) {
    try {
      const user = await this.userService.findOneById(userId);
      const project = await this.repository.create({ ...projectData, project_lead: userId, network: projectData.network });
      if (user && project) {
        await this.projectMemberService.create<CreateProjectMemberDto>({ member: user.id, project_id: project.id, role: 20, workspace_id: project.workspace_id })
      }
      return project;
    } catch (error) {
      handleResultError({ message: messageCreateFail(this.repository.getTableName()), statusCode: 500, messageDetail: error })
    }
  }
}
