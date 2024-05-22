import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/api/Base.service';
import { GlobalView } from '../entitys/GlobalView.entity';
import { Repository } from 'sequelize-typescript';
import { InjectModel } from '@nestjs/sequelize';
import { ProjectView } from '../entitys/ProjectView.entity';
import { CreateProjectViewDto } from '../dto/ProjectView.dto';
import { UserService } from 'src/api/user/service/user.service';
import { handleResultError } from 'src/helper/handleresult';
import { messageCreateFail } from 'src/helper/message.create';
import { User } from 'src/api/user/entitys/User.entity';

@Injectable()
export class ProjectViewService extends BaseService<ProjectView> {
    constructor(@InjectModel(ProjectView) 
        public repository: Repository<ProjectView>,
        private readonly userService: UserService,
    ) {
        super(repository)
    }

    async createProjectViews(projectView: CreateProjectViewDto){
        try {
            const user = await this.userService.findOneById(projectView.created_at);

            if(user.id) return await this.create({...projectView, workspace_id: user.last_workspace_id});

            handleResultError({message: messageCreateFail(this.repository.getTableName()), messageDetail: 'error'})
        } catch (error) {
            handleResultError({message: messageCreateFail(this.repository.getTableName()), messageDetail: error})
        }    
    }

    async findAllProjectView(userId:string, projectId:string){
        try {
            const user = await this.userService.findOneById(userId);

            if(user.last_workspace_id && projectId) return await this.findAll({where:{ workspace_id:user.last_workspace_id, project_id: projectId },include:[{model: User, as:'creator'}], order: [['createdAt', 'DESC']], limit: 10});
            
            handleResultError({message: messageCreateFail(this.repository.getTableName()), messageDetail: 'error'})
        } catch (error) {
            handleResultError({message: messageCreateFail(this.repository.getTableName()), messageDetail: error})
        }    
    }
}
