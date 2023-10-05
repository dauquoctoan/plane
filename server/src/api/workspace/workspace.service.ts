import { Injectable } from '@nestjs/common';
import { CreateWorkspaceDto } from './dto/create-workspace.dto';
import { UpdateWorkspaceDto } from './dto/update-workspace.dto';
import { Repository } from 'sequelize-typescript';
import { Workspace } from './entitys/Workspace.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Team } from './entitys/Team.entity';
import { handleResultError, handleResultSuccess } from 'src/helper/handleresult';
import { messageCreateErorr } from 'src/helper/message.create';
import { TeamMember } from './entitys/TeamMember.entity';

@Injectable()
export class WorkspaceService {
  constructor(
    @InjectRepository(Workspace) public workspaceRepository: Repository<Workspace>,
    @InjectRepository(Team) public teamRepository: Repository<Team>,
    @InjectRepository(TeamMember) public teamMemberRepository: Repository<TeamMember>,
  ) { }

  async create(workSpace: CreateWorkspaceDto) {
    try {
      console.log(workSpace)
      const result = await this.workspaceRepository.create({ ...workSpace });
      return handleResultSuccess(result);
    } catch (error) {
      handleResultError({ message: messageCreateErorr('Team'), messageDetail: error });
    }
  }

  findAll() {
    return `This action returns all workspace`;
  }

  findOne(id: number) {
    return `This action returns a #${id} workspace`;
  }

  update(id: number, updateWorkspaceDto: UpdateWorkspaceDto) {
    return `This action updates a #${id} workspace`;
  }

  remove(id: number) {
    return `This action removes a #${id} workspace`;
  }

  /* Team */
  async createTeam(team: any) {
    try {
      const result = await this.teamRepository.create({ ...team });
      return handleResultSuccess(result);
    } catch (error) {
      handleResultError({ message: messageCreateErorr('Team'), messageDetail: error });
    }
  }

  /*TeamMember */
  async createTeamMember(team: any) {
    try {
      const result = await this.teamMemberRepository.create({ ...team });
      return handleResultSuccess(result);
    } catch (error) {
      handleResultError({ message: messageCreateErorr('TeamMember'), messageDetail: error });
    }
  }

}
