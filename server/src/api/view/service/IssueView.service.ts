import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/api/Base.service';
import { IssueView } from '../entitys/IssueView.entity';
import { Repository } from 'sequelize-typescript';
import { InjectRepository } from '@nestjs/typeorm';
import { InjectModel } from '@nestjs/sequelize';
import { CreateIssueViewDto } from '../dto/IssueView.dto';
import { handleResultError } from 'src/helper/handleresult';
import { messageCreateFail } from 'src/helper/message.create';
import { UserService } from 'src/api/user/service/user.service';

@Injectable()
export class IssueViewService extends BaseService<IssueView> {
  constructor(
    @InjectModel(IssueView) public repository: Repository<IssueView>,
    private readonly userService: UserService,
  ) {
    super(repository);
  }

  async createIssueViews(issueView: CreateIssueViewDto) {
    try {
      const user = await this.userService.findOneById(issueView.created_at);

      if (user.id) {
        return await this.create({
          ...issueView,
          workpsace_id: user.last_workspace_id,
        });
      }

      handleResultError({
        message: messageCreateFail(this.repository.getTableName()),
        messageDetail: 'error',
      });
    } catch (error) {
      handleResultError({
        message: messageCreateFail(this.repository.getTableName()),
        messageDetail: error,
      });
    }
  }

  async findAllIssueView(userId: string) {
    try {
      const user = await this.userService.findOneById(userId);
      if (user.last_workspace_id) {
        return await this.findAll({
          where: { workpsace_id: user.last_workspace_id, created_at: user.id },
          order: [['createdAt', 'DESC']],
          limit: 10,
        });
      }
      handleResultError({
        message: messageCreateFail(this.repository.getTableName()),
        messageDetail: 'error',
      });
    } catch (error) {
      handleResultError({
        message: messageCreateFail(this.repository.getTableName()),
        messageDetail: error,
      });
    }
  }
}
