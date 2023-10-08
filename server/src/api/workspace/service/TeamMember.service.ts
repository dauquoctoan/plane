import { Injectable } from '@nestjs/common';
import { Repository } from 'sequelize-typescript';
import { InjectRepository } from '@nestjs/typeorm';
import { handleResultError, handleResultSuccess } from 'src/helper/handleresult';
import { messageCreateErorr, messageDeleteErorr, messageFindErorr, messageUpdateErorr } from 'src/helper/message.create';
import { TeamMember } from '../entitys/TeamMember.entity';
import { CreateTeamMemberDto, UpdateTeamMemberDto } from '../dto/TeamMember.dto';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class TeamMemberService {
  constructor(
    @InjectModel(TeamMember) public teamMemberRepository: Repository<TeamMember>,
  ) { }
  /* TeamMember */
  async createTeamMember(teamMember: CreateTeamMemberDto) {
    try {
      const result = await this.teamMemberRepository.create({ ...teamMember });
      return handleResultSuccess(result);
    } catch (error) {
      handleResultError({ message: messageCreateErorr('TeamMember'), messageDetail: error });
    }
  }

  async findAllTeamMember() {
    try {
      const result = await this.teamMemberRepository.findAll();
      return handleResultSuccess(result);
    } catch (error) {
      handleResultError({ message: messageFindErorr('TeamMember'), messageDetail: error });
    }
  }

  async findOneTeamMember(condition: any) {
    try {
      const result = await this.teamMemberRepository.findOne({ where: { ...condition } });
      return handleResultSuccess(result);
    } catch (error) {
      handleResultError({ message: messageFindErorr('TeamMember'), messageDetail: error });
    }
  }

  async updateTeamMember(id: number, teamUpdte: UpdateTeamMemberDto) {
    try {
      const result = await this.teamMemberRepository.update({
        teamUpdte
      },
        { where: { id } })
      return handleResultSuccess(result);
    } catch (error) {
      handleResultError({ message: messageUpdateErorr('TeamMember'), messageDetail: error });
    }
  }

  async removeTeamMember(condition: any) {
    console.log('===============')
    console.log('========', condition, '=======')
    console.log('===============')

    try {
      const result = await this.teamMemberRepository.destroy({ where: { ...condition } });
      return handleResultSuccess(result);
    } catch (error) {
      handleResultError({ message: messageDeleteErorr('TeamMember'), messageDetail: error });
    }
  }
}
