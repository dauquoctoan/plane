import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { BaseService } from 'src/api/Base.service';
import { IssueAssignee } from '../entitys/IssueAssignee.entity';
import { handleResultError } from 'src/helper/handleresult';
import { messageUpdateFail } from 'src/helper/message.create';
import { CreateIssueAssigneeDto } from '../dto/IssueAssignee.dto';

@Injectable()
export class IssueAssigneeService extends BaseService<IssueAssignee> {
  constructor(
    @InjectModel(IssueAssignee)
    private issueAssignee: typeof IssueAssignee,
  ) {
    super(issueAssignee);
  }

  async changeIssueAsign(issueAssigneesData: string[], issueId: string) {
    try {
      const currentIssueAsignee = await this.repository.findAll({
        where: { issue_id: issueId },
      });
      if (currentIssueAsignee.length > issueAssigneesData.length) {
        const lsIdMemeberDestroy = currentIssueAsignee.filter(e => {
          return !issueAssigneesData.includes(e.assignee);
        });

        const lsIdUserDes: string[] = lsIdMemeberDestroy.map(e => e.assignee);

        if (lsIdUserDes.length > 0) {
          await this.repository.destroy({
            where: {
              issue_id: issueId,
              assignee: lsIdUserDes,
            },
          });
        }

        return 1;
      } else {
        const lsCurentId: string[] = currentIssueAsignee.map(e => e.assignee);
        const newItem = issueAssigneesData.filter(
          item => !lsCurentId.includes(item),
        );

        if (newItem.length > 0) {
          await this.creates<CreateIssueAssigneeDto>(
            newItem.map(e => ({ issue_id: issueId, assignee: e })),
          );
        }
        return 1;
      }
    } catch (error) {
      handleResultError({
        message: messageUpdateFail(this.repository.getTableName()),
        messageDetail: error,
      });
    }
  }
}
