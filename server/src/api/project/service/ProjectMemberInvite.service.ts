import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Repository } from 'sequelize-typescript';
import { BaseService } from 'src/api/Base.service';
import { ProjectMemberInvite } from '../entitys/ProjectMemberInvite.entity';

@Injectable()
export class ProjectMemberInviteService extends BaseService<ProjectMemberInvite> {
  constructor(
    @InjectModel(ProjectMemberInvite)
    public repository: Repository<ProjectMemberInvite>,
  ) {
    super(repository);
  }
}
