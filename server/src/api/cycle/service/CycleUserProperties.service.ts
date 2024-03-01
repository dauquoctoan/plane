import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Repository } from 'sequelize-typescript';
import { BaseService } from 'src/api/Base.service';
import { CycleUserProperties } from '../entitys/CycleUserProperties';
import { handleResultError } from 'src/helper/handleresult';
import { messageCreateFail } from 'src/helper/message.create';

@Injectable()
export class CycleUserPropertiesService extends BaseService<CycleUserProperties> {
    constructor(
        @InjectModel(CycleUserProperties) public repository: Repository<CycleUserProperties>,
    ) {
        super(repository)
    }

    async findOrCreate(projectId:string, cycleId:string, userId:string){
        try {
            return this.repository.findOrCreate({
                where:{   
                project_id: projectId,
                cycle_id: cycleId,
                user_id: userId
            },
            defaults:{
                project_id: projectId,
                cycle_id: cycleId,
                user_id: userId
            }
        })
        } catch (error) {
            handleResultError({message: messageCreateFail(this.repository.getTableName()),messageDetail:error})
        }
    }
}
