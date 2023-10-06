import { Injectable } from '@nestjs/common';
import { CreateWorkspaceDto } from '../dto/create-workspace.dto';
import { UpdateWorkspaceDto } from '../dto/update-workspace.dto';
import { Repository } from 'sequelize-typescript';
import { Workspace } from '../entitys/Workspace.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Team } from '../entitys/Team.entity';
import { handleResultError, handleResultSuccess } from 'src/helper/handleresult';
import { messageCreateErorr, messageDeleteErorr, messageFindErorr, messageUpdateErorr } from 'src/helper/message.create';
import { TeamMember } from '../entitys/TeamMember.entity';


@Injectable()
export class WorkspaceService {
  constructor(
    @InjectRepository(Workspace) public workspaceRepository: Repository<Workspace>,
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
      const result = await this.workspaceRepository.findAll();
      return handleResultSuccess(result);
    } catch (error) {
      handleResultError({ message: messageFindErorr('Workspace'), messageDetail: error });
    }
  }

  async findOneWorkSpace(id: any) {
    try {
      const result = await this.workspaceRepository.findOne({ where: { id } });
      return handleResultSuccess(result);
    } catch (error) {
      handleResultError({ message: messageFindErorr('Workspace'), messageDetail: error });
    }
  }

  async updateWorkSpace(id: number, updateWorkspaceDto: UpdateWorkspaceDto) {
    try {
      const result = await this.workspaceRepository.update({
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
      const result = await this.workspaceRepository.destroy({ where: { id: id } });
      return handleResultSuccess(result);
    } catch (error) {
      handleResultError({ message: messageDeleteErorr('Workspace'), messageDetail: error });
    }
  }
}
