import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Repository } from 'sequelize-typescript';
import { BaseService } from 'src/api/Base.service';
import { CycleIssue } from '../entitys/CycleIssue.entity';
import { IssueService } from 'src/api/issue/service/issue.service';
import { Cycle } from '../entitys/Cycle.entity';
import { handleResultError } from 'src/helper/handleresult';
import { messageCreateFail, messageFindFail } from 'src/helper/message.create';
import { CreateCycleIssueDto } from '../dto/CycleIssue.dto';

@Injectable()
export class CycleIssueService extends BaseService<CycleIssue> {
  constructor(
    @InjectModel(CycleIssue) public repository: Repository<CycleIssue>,
  ) {
    super(repository);
  }

  async createCycleIssue(cycleIssueData: CreateCycleIssueDto) {
    try {
      return await this.repository.create(cycleIssueData);
    } catch (error) {
      handleResultError({
        message: messageCreateFail(this.repository.getTableName()),
        messageDetail: error,
      });
    }
  }
}
