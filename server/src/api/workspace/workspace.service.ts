import { Injectable } from '@nestjs/common';
import { CreateWorkspaceDto } from './dto/create-workspace.dto';
import { UpdateWorkspaceDto } from './dto/update-workspace.dto';
import { Workspace } from './entitys/Workspace.entity';
import { InjectModel } from '@nestjs/sequelize';
import { Team } from './entitys/Team.entity';

@Injectable()
export class WorkspaceService {
  constructor(
    @InjectModel(Workspace)
    private userModel: typeof Workspace,

    @InjectModel(Team)
    private teamModel: typeof Team,
) { }

    create(createWorkspaceDto: CreateWorkspaceDto) {
        return 'This action adds a new workspace';
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

      /* 
        Team
      */
      createTeam(createTeamDto: any):any {
        this.teamModel.create({...createTeamDto})
      }
        
}
