import { Injectable } from '@nestjs/common';
import { CreateWorkspaceDto } from './dto/create-workspace.dto';
import { UpdateWorkspaceDto } from './dto/update-workspace.dto';
import { Repository } from 'sequelize-typescript';
import { Workspace } from './entitys/Workspace.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Team } from './entitys/Team.entity';
import { handleResultError, handleResultSuccess } from 'src/helper/handleresult';
import { messageCreateErorr, messageDeleteErorr, messageFindErorr, messageUpdateErorr } from 'src/helper/message.create';
import { TeamMember } from './entitys/TeamMember.entity';
import { CreateTeamDto } from './dto/create-team.dto';
import { CreateTeamMemberDto } from './dto/create-team-member.dto';
import { UpdateTeamMemberDto } from './dto/update-team-member.dto';
import { UpdateTeamDto } from './dto/update-team.dto';

@Injectable()
export class WorkspaceService {
  constructor(
    @InjectRepository(Workspace) public workspaceRepository: Repository<Workspace>,
    @InjectRepository(Team) public teamRepository: Repository<Team>,
    @InjectRepository(TeamMember) public teamMemberRepository: Repository<TeamMember>,
  ) { }
    /* Workspace */
  async createWorkSpace(workSpace: CreateWorkspaceDto) {
    try {
      const result = await this.workspaceRepository.create({ ...workSpace });
      return handleResultSuccess(result);
    } catch (error) {
      handleResultError({ message: messageCreateErorr('Workspace'), messageDetail: error });
    }
  }

  async findAllWorkSpace() {
    try {
      const result = await this.workspaceRepository.create();
      return handleResultSuccess(result);
    } catch (error) {
      handleResultError({ message: messageFindErorr('Workspace'), messageDetail: error });
    }
  }

  async findOneWorkSpace(condition: any) {
    try {
      const result = await this.workspaceRepository.findOne({ where: { ...condition} });
      return handleResultSuccess(result);
    } catch (error) {
      handleResultError({ message: messageFindErorr('Workspace'), messageDetail: error });
    }
  }

  async updateWorkSpace(id: number, updateWorkspaceDto: UpdateWorkspaceDto) {
    try {
      const result = await this.workspaceRepository.update( {
        updateWorkspaceDto
      },
      { where: { id } })
      return handleResultSuccess(result);
    } catch (error) {
      handleResultError({ message: messageUpdateErorr('Workspace'), messageDetail: error });
    }
  }

  async removeWorkSpace(id: number) {
    try {
      const result = await this.workspaceRepository.destroy({where:{id}});
      return handleResultSuccess(result);
    } catch (error) {
      handleResultError({ message: messageDeleteErorr('Workspace'), messageDetail: error });
    }
  }

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
      const result = await this.teamRepository.findOne({ where: { ...condition} });
      return handleResultSuccess(result);
    } catch (error) {
      handleResultError({ message: messageFindErorr('Team'), messageDetail: error });
    }
  }

  async updateTeam(id: number, teamUpdate: UpdateTeamDto) {
    try {
      const result = await this.teamRepository.update( {
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
      const result = await this.teamRepository.destroy({where:{id}});
      return handleResultSuccess(result);
    } catch (error) {
      handleResultError({ message: messageDeleteErorr('Team'), messageDetail: error });
    }
  }

  /* TeamMember */
  async createTeamMember(team: CreateTeamMemberDto) {
    try {
      const result = await this.teamMemberRepository.create();
      return handleResultSuccess(result);
    } catch (error) {
      handleResultError({ message: messageCreateErorr('TeamMember'), messageDetail: error });
    }
  }

  async findAllTeamMember() {
    try {
      const result = await this.teamMemberRepository.findAll();
      console.log('===============');
      return handleResultSuccess(result);
    } catch (error) {
      handleResultError({ message: messageFindErorr('TeamMember'), messageDetail: error });
    }
  }

  async findOneTeamMember(condition: any) {
    try {
      const result = await this.teamMemberRepository.findOne({ where: { ...condition} });
      return handleResultSuccess(result);
    } catch (error) {
      handleResultError({ message: messageFindErorr('TeamMember'), messageDetail: error });
    }
  }

  async updateTeamMember(id: number, teamUpdte: UpdateTeamMemberDto) {
    try {
      const result = await this.teamMemberRepository.update( {
        teamUpdte
      },
      { where: { id } })
      return handleResultSuccess(result);
    } catch (error) {
      handleResultError({ message: messageUpdateErorr('TeamMember'), messageDetail: error });
    }
  }

  async removeTeamMember(id: number) {
    try {
      const result = await this.teamMemberRepository.destroy({where:{id}});
      return handleResultSuccess(result);
    } catch (error) {
      handleResultError({ message: messageUpdateErorr('TeamMember'), messageDetail: error });
    }
  }
}
