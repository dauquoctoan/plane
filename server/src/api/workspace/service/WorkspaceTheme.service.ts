import { Injectable } from '@nestjs/common';
import { Repository } from 'sequelize-typescript';
import { WorkspaceTheme } from '../entitys/WorkspaceTheme.entity';
import { InjectModel } from '@nestjs/sequelize';
import { BaseService } from 'src/api/Base.service';

@Injectable()
export class WorkspaceThemeService extends BaseService<WorkspaceTheme> {
  constructor(
    @InjectModel(WorkspaceTheme) public repository: Repository<WorkspaceTheme>,
  ) {
    super(repository);
  }
}
