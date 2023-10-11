import { Injectable } from '@nestjs/common';
import { Repository } from 'sequelize-typescript';
import { TeamMember } from '../entitys/TeamMember.entity';
import { InjectModel } from '@nestjs/sequelize';
import { BaseService } from 'src/api/Base.service';

@Injectable()
export class TeamMemberService extends BaseService {
  constructor(
    @InjectModel(TeamMember) public repository: Repository<TeamMember>,
  ) {
    super(repository)
  }
}
