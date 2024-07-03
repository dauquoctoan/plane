import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { BaseService } from 'src/api/Base.service';
import { Page } from '../entitys/Page.entity';
import { Repository } from 'sequelize-typescript';
import { handleResultError } from 'src/helper/handleresult';
import { messageCreateFail, messageFindFail } from 'src/helper/message.create';
import { CreatePageDto } from '../dto/Page.dto';
import { UserService } from 'src/api/user/service/user.service';

@Injectable()
export class PageService extends BaseService<Page> {
  constructor(
    @InjectModel(Page) public repository: Repository<Page>,
    readonly userService: UserService,
  ) {
    super(repository);
  }

  async findPageByProject(projectId: string) {
    try {
      return await this.findAll({ where: { project_id: projectId } });
    } catch (error) {
      handleResultError({
        message: messageFindFail(this.repository.getTableName()),
        messageDetail: 'Invalid user',
      });
    }
  }

  async createPageBy(userId: string, page: CreatePageDto) {
    try {
      const info = await this.userService.getUser(userId);
      return await this.repository.create({
        ...page,
        workspace_id: info.last_workspace_id,
      });
    } catch (error) {
      handleResultError({
        message: messageFindFail(this.repository.getTableName()),
        messageDetail: 'Invalid user',
      });
    }
  }
}
