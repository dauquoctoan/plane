import { Injectable } from '@nestjs/common';
import { CreateWorkspaceDto, UpdateWorkspaceDto } from '../dto/Workspace.dto';
import { Repository } from 'sequelize-typescript';
import { Workspace } from '../entitys/Workspace.entity';
import { handleResultError, handleResultSuccess } from 'src/helper/handleresult';
import { messageCreateErorr, messageDeleteErorr, messageFindErorr, messageUpdateErorr } from 'src/helper/message.create';
import { InjectModel } from '@nestjs/sequelize';
import { BaseService } from 'src/api/Base.service';


@Injectable()
export class WorkspaceService extends BaseService {
  constructor(
    @InjectModel(Workspace) public repository: Repository<Workspace>,
  ) {
    super(repository);
  }
}
