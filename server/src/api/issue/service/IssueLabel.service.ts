import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { BaseService } from 'src/api/Base.service';
import { IssueLabel } from '../entitys/IssueLabel.entity';
import { CreateIssueLabelDto } from '../dto/IssueLabel.dto';
import { handleResultError } from 'src/helper/handleresult';
import { messageUpdateFail } from 'src/helper/message.create';

@Injectable()
export class IssueLabelService extends BaseService<IssueLabel> {
  constructor(
    @InjectModel(IssueLabel)
    private issueLabel: typeof IssueLabel,
  ) {
    super(issueLabel);
  }

  async changeIssueLabel(issueLabelData: string[], issueId: string) {
    try {
      const currentIssueAsignee = await this.issueLabel.findAll({
        where: { issue_id: issueId },
      });
      if (currentIssueAsignee.length > issueLabelData.length) {
        const lsIdMemeberDestroy = currentIssueAsignee.filter(e => {
          return !issueLabelData.includes(e.label_id);
        });

        const lsIdUserDes: string[] = lsIdMemeberDestroy.map(e => e.label_id);

        if (lsIdUserDes.length > 0) {
          await this.issueLabel.destroy({
            where: {
              issue_id: issueId,
              label_id: lsIdUserDes,
            },
          });
        }

        return 1;
      } else {
        const lsCurentId: string[] = currentIssueAsignee.map(e => e.label_id);
        const newItem = issueLabelData.filter(
          item => !lsCurentId.includes(item),
        );

        if (newItem.length > 0) {
          await this.creates<CreateIssueLabelDto>(
            newItem.map(e => ({ issue_id: issueId, label_id: e })),
          );
        }

        return 1;
      }
    } catch (error) {
      handleResultError({
        message: messageUpdateFail(this.issueLabel.getTableName()),
        messageDetail: error,
      });
    }
  }
}
