import { Injectable } from '@nestjs/common';
import { CreateWorkspaceDto } from '../dto/create-workspace.dto';
import { UpdateWorkspaceDto } from '../dto/update-workspace.dto';
import { Repository } from 'sequelize-typescript';
import { InjectRepository } from '@nestjs/typeorm';
import { Team } from '../entitys/Team.entity';
import { handleResultError, handleResultSuccess } from 'src/helper/handleresult';
import { messageCreateErorr, messageDeleteErorr, messageFindErorr, messageUpdateErorr } from 'src/helper/message.create';
import { CreateTeamDto } from '../dto/create-team.dto';
import { UpdateTeamDto } from '../dto/update-team.dto';

@Injectable()
export class TeamService {
  constructor(
    @InjectRepository(Team) public teamRepository: Repository<Team>,
  ) { }
  /* Team */
  async createTeam(team: CreateTeamDto) {
    try {
      const result = await this.teamRepository.create({ ...team });
      return handleResultSuccess(result);
    } catch (error) {
      handleResultError({ message: messageCreateErorr('Team'), messageDetail: error });
    }
  }

  async findAllTeam() {
    try {
      const result = await this.teamRepository.findAll();
      return handleResultSuccess(result);
    } catch (error) {
      handleResultError({ message: messageFindErorr('Team'), messageDetail: error });
    }
  }

  async findOneTeam(condition: any) {
    try {
      const result = await this.teamRepository.findOne({ where: { ...condition } });
      return handleResultSuccess(result);
    } catch (error) {
      handleResultError({ message: messageFindErorr('Team'), messageDetail: error });
    }
  }

  async updateTeam(id: number, teamUpdate: UpdateTeamDto) {
    try {
      const result = await this.teamRepository.update({
        teamUpdate
      },
        { where: { id } })
      return handleResultSuccess(result);
    } catch (error) {
      handleResultError({ message: messageUpdateErorr('Team'), messageDetail: error });
    }
  }

  async removeTeam(id: number) {
    try {
      const result = await this.teamRepository.destroy({ where: { id } });
      return handleResultSuccess(result);
    } catch (error) {
      handleResultError({ message: messageDeleteErorr('Team'), messageDetail: error });
    }
  }
}
