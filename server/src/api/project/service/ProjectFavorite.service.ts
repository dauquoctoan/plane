import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Repository } from 'sequelize-typescript';
import { BaseService } from 'src/api/Base.service';
import { ProjectFavorite } from '../entitys/projectFavorite.entity';
import { Project } from '../entitys/Project.entity';
import { ProjectService } from './project.service';
import { CreateProjectFavoriteDto } from '../dto/ProjectFavorite.dto';
import { handleResultError } from 'src/helper/handleresult';
import { messageCreateFail } from 'src/helper/message.create';
import { UserService } from 'src/api/user/service/user.service';

@Injectable()
export class ProjectFavoriteService extends BaseService<ProjectFavorite>{
    constructor(
        @InjectModel(ProjectFavorite) public repository: Repository<ProjectFavorite>,
        readonly projectService: ProjectService,
        readonly userService: UserService,
    ) {
        super(repository);
    }

    async createProjectFavorite(projectId: string, userId:string){
        try {
            const info = await this.userService.getUser(userId)
            return await this.repository.create({project_id: projectId,user_id: info.id, workspace_id: info.last_workspace_id})
        } catch (error) {
            handleResultError({message: messageCreateFail(this.repository.getTableName()),messageDetail:error})
        }
    }
}
