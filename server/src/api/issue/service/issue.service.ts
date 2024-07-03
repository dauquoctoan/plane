import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { BaseService } from 'src/api/Base.service';
import { Issue } from '../entitys/Issue.entity';
import { handleResultError } from 'src/helper/handleresult';
import { messageCreateFail, messageFindFail } from 'src/helper/message.create';
import { User } from 'src/api/user/entitys/User.entity';
import { CreateIssueDto, QueryIssueDto } from '../dto/Issue.dto';
import { UserService } from 'src/api/user/service/user.service';
import { Op } from 'sequelize';
import { LabelService } from './Label.service';
import { Label } from '../entitys/Label.entity';
import { Project } from 'src/api/project/entitys/Project.entity';
import { CycleIssueService } from 'src/api/cycle/service/CycleIssue.service';
import { CycleIssue } from 'src/api/cycle/entitys/CycleIssue.entity';
import { ModuleIssueService } from 'src/api/module/service/ModuleIssue.service';
import { ModuleIssue } from 'src/api/module/entitys/ModuleIssue.entity';
import { State } from 'src/api/state/entitys/state.entity';
import sequelize from 'sequelize';
import { PRIORITY } from 'src/constants/entity-constant';
import {
  getQueryTime,
  getQueryTimeFromNowDue,
  getQueryTimeFromNowStart,
} from 'src/helper/date';
import { TtypeDate } from 'src/types/date.types';

@Injectable()
export class IssueService extends BaseService<Issue> {
  constructor(
    @InjectModel(Issue)
    private issueRepository: typeof Issue,
    private readonly userService: UserService,
    private readonly labelService: LabelService,
    readonly cycleIssueService: CycleIssueService,
    readonly moduleIssueService: ModuleIssueService,
  ) {
    super(issueRepository);
  }

  //Analytics

  async overviewAnalytics(userId: string) {
    try {
      const issueAssignedByState = this.assignedByState(userId);
      const issuePendingByMember = this.issuePendingByMember(userId);
      const topIssueCreated = this.topIssueCreated(userId);
      const topIssueClosed = this.topIssueClosed(userId);
      const chartIssueClosedByMonth = this.chartIssueClosedByMonth(userId);

      return {
        issueAssignedByState: await issueAssignedByState,
        issuePendingByMember: await issuePendingByMember,
        topIssueCreated: await topIssueCreated,
        topIssueClosed: await topIssueClosed,
        chartIssueClosedByMonth: await chartIssueClosedByMonth,
      };
    } catch (error) {
      handleResultError({
        message: messageFindFail(this.repository.getTableName()),
        messageDetail: error,
      });
    }
  }

  async assignedByState(userId: string) {
    try {
      const info = await this.userService.getUser(userId);
      return await this.repository.findAll({
        attributes: [
          [sequelize.col('state.group'), 'group'],
          [sequelize.fn('COUNT', sequelize.col('Issue.id')), 'total'],
        ],
        include: [
          {
            model: State,
            attributes: [],
            required: true,
            where: {
              group: ['backlog', 'started', 'unstarted'],
            },
          },
          {
            model: User,
            as: 'assignees',
            attributes: [],
            where: {
              id: userId,
            },
            through: { attributes: [] },
          },
        ],
        where: {
          workspace_id: info.last_workspace_id,
        },
        group: ['state.group'],
        raw: true,
      });
    } catch (error) {
      handleResultError({
        message: messageFindFail(this.repository.getTableName()),
        messageDetail: error,
      });
    }
  }

  async issuePendingByMember(userId: string) {
    try {
      const info = await this.userService.getUser(userId);
      return await this.repository.findAll({
        attributes: [
          [sequelize.literal('`assignees`.`last_name`'), 'last_name'],
          [sequelize.literal('`assignees`.`first_name`'), 'first_name'],
          [sequelize.literal('`assignees`.`email`'), 'email'],
          [sequelize.literal('`assignees`.`id`'), 'id'],
          [sequelize.fn('COUNT', sequelize.col('Issue.id')), 'total'],
        ],
        include: [
          {
            model: User,
            as: 'assignees',
            attributes: [],
            required: true,
            through: { attributes: [] },
          },
          {
            model: State,
            attributes: [],
            where: {
              group: ['backlog', 'unstarted', 'started'],
            },
          },
        ],
        where: {
          workspace_id: info.last_workspace_id,
        },
        group: ['assignees.id'],
        raw: true,
      });
    } catch (error) {
      handleResultError({
        message: messageFindFail(this.repository.getTableName()),
        messageDetail: error,
      });
    }
  }

  async topIssueCreated(userId: string) {
    try {
      const info = await this.userService.getUser(userId);
      return await this.repository.findAll({
        attributes: [
          [sequelize.literal('`creator`.`last_name`'), 'last_name'],
          [sequelize.literal('`creator`.`first_name`'), 'first_name'],
          [sequelize.literal('`creator`.`email`'), 'email'],
          [sequelize.fn('COUNT', sequelize.col('Issue.id')), 'total'],
        ],
        include: [
          {
            model: User,
            as: 'creator',
            attributes: [],
            required: true,
          },
        ],
        where: {
          workspace_id: info.last_workspace_id,
        },
        group: ['creator.id'],
        order: [['total', 'DESC']],
        limit: 1,
        raw: true,
      });
    } catch (error) {
      handleResultError({
        message: messageFindFail(this.repository.getTableName()),
        messageDetail: error,
      });
    }
  }

  async topIssueClosed(userId: string) {
    try {
      const info = await this.userService.getUser(userId);
      return await this.repository.findAll({
        attributes: [
          [sequelize.literal('`assignees`.`last_name`'), 'last_name'],
          [sequelize.literal('`assignees`.`first_name`'), 'first_name'],
          [sequelize.literal('`assignees`.`email`'), 'email'],
          [sequelize.literal('`assignees`.`id`'), 'id'],
          [sequelize.fn('COUNT', sequelize.col('Issue.id')), 'total'],
        ],
        include: [
          {
            model: User,
            as: 'assignees',
            attributes: [],
            required: true,
            through: { attributes: [] },
          },
          {
            model: State,
            attributes: [],
            where: {
              group: ['completed'],
            },
          },
        ],
        where: {
          workspace_id: info.last_workspace_id,
        },
        group: ['assignees.id'],
        raw: true,
      });
    } catch (error) {
      handleResultError({
        message: messageFindFail(this.repository.getTableName()),
        messageDetail: error,
      });
    }
  }

  async chartIssueClosedByMonth(userId: string) {
    try {
      const info = await this.userService.getUser(userId);
      return await this.repository.findAll({
        attributes: [
          [sequelize.fn('MONTH', sequelize.col('start_date')), 'month'],
          [sequelize.fn('COUNT', sequelize.col('Issue.id')), 'total'],
        ],
        include: [
          {
            model: State,
            attributes: [],
            where: {
              group: ['completed'],
            },
          },
        ],
        where: {
          workspace_id: info.last_workspace_id,
          start_date: {
            [sequelize.Op.not]: null,
          },
        },
        group: ['month'],
        raw: true,
      });
    } catch (error) {
      handleResultError({
        message: messageFindFail(this.repository.getTableName()),
        messageDetail: error,
      });
    }
  }

  //end Analytics

  async assignedByPriority(userId: string, typeDate: TtypeDate) {
    try {
      const info = await this.userService.getUser(userId);
      const issues: any = await this.repository.findAll({
        attributes: [
          'priority',
          [sequelize.fn('COUNT', sequelize.col('Issue.id')), 'total'],
        ],
        where: {
          workspace_id: info.last_workspace_id,
          ...getQueryTime(typeDate),
        },
        include: [
          {
            model: User,
            as: 'assignees',
            attributes: [],
            where: {
              id: userId,
            },
            through: { attributes: [] },
          },
        ],
        group: ['priority'],
        raw: true,
      });

      return PRIORITY.map(priority => ({
        priority,
        total: issues.find(e => e?.priority == priority)?.total || 0,
      }));
    } catch (error) {
      handleResultError({
        message: messageFindFail(this.repository.getTableName()),
        messageDetail: error,
      });
    }
  }

  async getOverView(userId: string) {
    try {
      const info = await this.userService.getUser(userId);

      const issueAssignee = this.repository.count({
        where: {
          workspace_id: info.last_workspace_id,
        },
        include: [
          {
            model: User,
            as: 'assignees',
            where: {
              id: [info.id],
            },
          },
        ],
      });

      const issueCreated = this.repository.count({
        where: {
          workspace_id: info.last_workspace_id,
          create_by: info.id,
        },
      });

      const issueCompleted = this.repository.count({
        where: {
          workspace_id: info.last_workspace_id,
          create_by: info.id,
        },
        include: {
          model: State,
          where: {
            group: 'completed',
          },
        },
      });

      const issueOverdue = this.repository.count({
        where: {
          workspace_id: info.last_workspace_id,
          target_date: {
            [Op.lt]: new Date(),
            [Op.not]: null,
          },
        },
      });

      return {
        issueAssignee: await issueAssignee,
        issueCreated: await issueCreated,
        issueCompleted: await issueCompleted,
        issueOverdue: await issueOverdue,
      };
    } catch (error) {
      handleResultError({
        message: messageFindFail(this.repository.getTableName()),
        messageDetail: error,
      });
    }
  }

  async createIssue(issueItem: CreateIssueDto, idUser: string) {
    try {
      let users = [],
        labels = [];
      if (issueItem.assignees && issueItem.assignees.length > 0) {
        users = await this.userService.findAll({
          where: {
            id: {
              [Op.in]: issueItem.assignees || [''],
            },
          },
        });
      }

      if (issueItem.labels && issueItem.labels.length > 0) {
        labels = await this.labelService.findAll({
          where: {
            id: {
              [Op.in]: issueItem.labels || [''],
            },
          },
        });
      }

      const maxIssue = await this.repository.findOne({
        where: {
          project_id: issueItem.project_id,
        },
        order: [['sequence_id', 'DESC']],
        limit: 1,
      });

      const issue = await this.repository.create({
        create_by: idUser,
        sequence_id: (maxIssue?.sequence_id || 0) + 1,
        ...issueItem,
      } as any);

      if (issueItem.cycle_id) {
        await this.cycleIssueService.createCycleIssue({
          cycle_id: issueItem.cycle_id,
          issue_id: issue.id,
        });
      }

      if (issueItem.module_id) {
        await this.moduleIssueService.createModuleIssue({
          module_id: issueItem.module_id,
          issue_id: issue.id,
        });
      }

      await issue.$add('assignees', users);
      await issue.$add('labels', labels);

      return { ...issue.dataValues, assignees: users, labels: labels };
    } catch (error) {
      handleResultError({
        message: messageCreateFail(this.repository.getTableName()),
        messageDetail: error,
      });
    }
  }

  async getIssueByProjectId(projectId: string, userId: string) {
    try {
      const user = await this.userService.getUser(userId);
      if (user.last_workspace_id) {
        return await this.repository.findAll({
          where: {
            workspace_id: user.last_workspace_id,
            project_id: projectId,
          },
          include: [
            {
              model: Project,
              as: 'project',
            },
            {
              model: User,
              as: 'creator',
            },
            {
              model: User,
              as: 'assignees',
            },
            {
              model: Label,
              as: 'labels',
            },
          ],
        });
      }

      handleResultError({
        message: messageFindFail(this.repository.getTableName()),
        messageDetail: 'last_workspace_id not found!',
      });
    } catch (error) {
      handleResultError({
        message: messageFindFail(this.repository.getTableName()),
        messageDetail: error,
      });
    }
  }

  async fillterIssue(dataDto: QueryIssueDto) {
    try {
      const user = await this.userService.getUser(dataDto.userId);
      if (user.last_workspace_id) {
        return await this.repository.findAll({
          where: {
            workspace_id: user.last_workspace_id,
            ...this.getQueryPriority(dataDto.priorities),
            ...this.getQueryState(dataDto.states),
            ...getQueryTimeFromNowDue(dataDto.dueDate, dataDto.typeDateQuery),
            ...getQueryTimeFromNowStart(dataDto.startDate),
          },
          include: [
            { model: State, as: 'state' },
            { model: Project, as: 'project' },
            this.getQueryAssignee(dataDto.assignees),
            this.getQueryCreator(dataDto.createBys),
            this.getQueryLabel(dataDto.labels),
            this.getQueryProject(dataDto.projects),
            this.getQueryCycle(dataDto.cycle_id),
            this.getQueryModule(dataDto.module_id),
          ],
        });
      }
      handleResultError({
        message: messageFindFail(this.repository.getTableName()),
        messageDetail: 'last_workspace_id not found!',
      });
    } catch (error) {
      handleResultError({
        message: messageFindFail(this.repository.getTableName()),
        messageDetail: error,
      });
    }
  }

  getQueryCreator(creators: string[]) {
    return creators && creators.length > 0
      ? {
          model: User,
          as: 'creator',
          where: {
            id: creators,
          },
        }
      : {
          model: User,
          as: 'creator',
        };
  }

  getQueryAssignee(assignees: string[]) {
    return assignees && assignees.length > 0
      ? {
          model: User,
          as: 'assignees',
          where: {
            id: [assignees],
          },
        }
      : {
          model: User,
          as: 'assignees',
        };
  }

  getQueryLabel(labels: string[]) {
    return labels && labels.length > 0
      ? {
          model: Label,
          as: 'labels',
          where: {
            id: [labels],
          },
        }
      : {
          model: Label,
          as: 'labels',
        };
  }

  getQueryStartDate(startDate: string): any {
    return startDate
      ? {
          start_date: {
            [Op.between]: [startDate, new Date()],
            [Op.not]: null,
          },
        }
      : {};
  }

  getQueryTargetDate(targetDate: string): any {
    return targetDate
      ? {
          target_date: {
            [Op.between]: [targetDate, new Date()],
            [Op.not]: null,
          },
        }
      : {};
  }

  getQueryState(states: string[]) {
    return states ? { state_id: states } : {};
  }

  getQueryProject(projects: string[]) {
    return projects && projects.length > 0
      ? {
          model: Project,
          as: 'project',
          where: {
            id: projects,
          },
        }
      : {
          model: Project,
          as: 'project',
        };
  }

  getQueryCycle(cycleId: string[]) {
    return cycleId
      ? {
          model: CycleIssue,
          as: 'cycleIssue',
          where: {
            cycle_id: cycleId,
          },
        }
      : {
          model: CycleIssue,
          as: 'cycleIssue',
        };
  }

  getQueryModule(moduleId: string[]) {
    return moduleId
      ? {
          model: ModuleIssue,
          as: 'module_issues',
          where: {
            module_id: moduleId,
          },
        }
      : {
          model: ModuleIssue,
          as: 'module_issues',
        };
  }

  getQueryPriority(priorities: string[]) {
    return priorities ? { priority: priorities } : {};
  }
}
