import { Injectable } from '@nestjs/common';
import { Repository } from 'sequelize-typescript';
import { Workspace } from '../entitys/Workspace.entity';
import { InjectModel } from '@nestjs/sequelize';
import { BaseService } from 'src/api/Base.service';
import { User } from 'src/api/user/entitys/User.entity';
import { handleResultError, handleResultSuccess } from 'src/helper/handleresult';
import { messageFindFail } from 'src/helper/message.create';

@Injectable()
export class WorkspaceService extends BaseService {
  constructor(
    @InjectModel(Workspace) public repository: Repository<Workspace>,
  ) {
    super(repository);
  }

  async findWorkspaceAndUser(id: string, isHandleResult = true) {
    try {
      const data = await this.repository.findOne({ where: { owner: id }, include: [User] });
      return isHandleResult ? handleResultSuccess(data) : data;
    } catch (error) {
      handleResultError({ message: messageFindFail(this.repository.getTableName()), messageDetail: error });
    }
  }
}
