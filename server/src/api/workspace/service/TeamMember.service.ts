import { Injectable } from '@nestjs/common';
import { Repository } from 'sequelize-typescript';
import { InjectRepository } from '@nestjs/typeorm';
import { handleResultError, handleResultSuccess } from 'src/helper/handleresult';
import { messageCreateErorr, messageDeleteErorr, messageFindErorr, messageUpdateErorr } from 'src/helper/message.create';
import { TeamMember } from '../entitys/TeamMember.entity';
import { CreateTeamMemberDto, UpdateTeamMemberDto } from '../dto/TeamMember.dto';
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
