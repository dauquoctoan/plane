import { Injectable } from '@nestjs/common';
import { Repository } from 'sequelize-typescript';
import { Team } from '../entitys/Team.entity';
import { InjectModel } from '@nestjs/sequelize';
import { BaseService } from 'src/api/Base.service';

@Injectable()
export class TeamService extends BaseService<Team>{
  constructor(
    @InjectModel(Team) public teamRepository: Repository<Team>,
  ) {
    super(teamRepository)
  }
}
