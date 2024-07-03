import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { BaseService } from 'src/api/Base.service';
import { ProjectIdentifier } from '../entitys/ProjectIdentifier.entity';
import { Repository } from 'sequelize-typescript';

@Injectable()
export class ProjectIdentifierService extends BaseService<ProjectIdentifier> {
  constructor(
    @InjectModel(ProjectIdentifier)
    public repository: Repository<ProjectIdentifier>,
  ) {
    super(repository);
  }
}
