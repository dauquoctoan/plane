import { Injectable } from '@nestjs/common';
import { Repository } from 'sequelize-typescript';
import { Workspace } from '../entitys/Workspace.entity';
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
