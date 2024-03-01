import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Repository } from 'sequelize-typescript';
import { BaseService } from 'src/api/Base.service';
import { handleResultError } from 'src/helper/handleresult';
import { messageCreateFail } from 'src/helper/message.create';
import { ModuleUserProperties } from '../entitys/ModuleUserProperties.entity';

@Injectable()
export class ModuleUserPropertiesService extends BaseService<ModuleUserProperties> {
    constructor(
        @InjectModel(ModuleUserProperties) public repository: Repository<ModuleUserProperties>,
    ) {
        super(repository)
    }

    async findOrCreate(projectId:string, moduleId:string, userId:string){
        try {
            return this.repository.findOrCreate({
                where:{   
                project_id: projectId,
                module_id: moduleId,
                user_id: userId
            },
            defaults:{
                project_id: projectId,
                module_id: moduleId,
                user_id: userId
            }
        })
        } catch (error) {
            handleResultError({message: messageCreateFail(this.repository.getTableName()),messageDetail:error})
        }
    }
}
