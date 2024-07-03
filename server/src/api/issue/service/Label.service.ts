import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { BaseService } from 'src/api/Base.service';
import { Label } from '../entitys/Label.entity';
import { CreateLabelDto } from '../dto/Label.dto';
import { handleResultError } from 'src/helper/handleresult';
import { messageCreateFail, messageFindFail } from 'src/helper/message.create';
import { UserService } from 'src/api/user/service/user.service';

@Injectable()
export class LabelService extends BaseService<Label> {
  constructor(
    @InjectModel(Label)
    private label: typeof Label,
    private readonly userService: UserService,
  ) {
    super(label);
  }

  async createLabel(label: CreateLabelDto, userId: string) {
    try {
      return await this.repository.create({ ...label, created_at: userId });
    } catch (error) {
      handleResultError({
        message: messageCreateFail(this.repository.getTableName()),
        messageDetail: error,
      });
    }
  }

  async findLabelByWorspaceIdAndProjectId(projectId: string, userId: string) {
    try {
      let query = {};

      if (projectId) {
        query = { project_id: projectId };
      }

      const info = await this.userService.getUser(userId);

      if (info.last_workspace_id)
        return await this.repository.findAll({
          where: { ...query, workspace_id: info.last_workspace_id },
        });

      handleResultError({
        message: messageFindFail(this.repository.getTableName()),
        messageDetail: 'error',
      });
    } catch (error) {
      handleResultError({
        message: messageFindFail(this.repository.getTableName()),
        messageDetail: error,
      });
    }
  }
}
