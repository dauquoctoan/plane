import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Module } from '../entitys/Module.entity';
import { Repository } from 'sequelize-typescript';
import { BaseService } from 'src/api/Base.service';
import { UserService } from 'src/api/user/service/User.service';
import { handleResultError } from 'src/helper/handleresult';
import { messageCreateFail, messageFindFail } from 'src/helper/message.create';
import { CreateModuleDto } from '../dto/Module.dto';
import sequelize from 'sequelize';
import { ModuleIssue } from '../entitys/ModuleIssue.entity';
import { Issue } from 'src/api/issue/entitys/Issue.entity';
import { State } from 'src/api/state/entitys/State.entity';

@Injectable()
export class ModuleService extends BaseService<Module> {
    constructor(
        @InjectModel(Module) public repository: Repository<Module>,
        readonly userService: UserService,
    ) {
        super(repository)
    }

    async createModule(projectId: string, userId:string, moduleData: CreateModuleDto){
        try {
         const user = await this.userService.findOneById(userId);
        if(user){
            return await this.repository.create({...moduleData, project_id:projectId, workspace_id: user.last_workspace_id})
        }
 
        handleResultError({ message: messageCreateFail(this.repository.getTableName()), messageDetail: 'Invalid user' });
        } catch (error) {
            handleResultError({ message: messageCreateFail(this.repository.getTableName()), messageDetail: 'Invalid user' });
        }
    }
 
    async findModulesProject(projectId:string, userId:string){
        try {
            const user = await this.userService.findOneById(userId);
            if(user){
             return await this.repository.findAll({
                 attributes: {
                     include:[
                         [sequelize.fn('COUNT', sequelize.col('module_issues.id')), 'total'],
                         [sequelize.literal('COUNT(CASE WHEN `module_issues->issue->state`.`group` = "completed" THEN `module_issues->issue->state`.`id` END)'), 'done']
                     ]
                 },
                 include: [
                   {
                     model: ModuleIssue,
                     attributes: [],
                     required: false, 
                     include:[
                         {
                             model: Issue,
                             attributes: [],
                             required: false,
                             include: [
                                 {
                                   model: State, 
                                   as: 'state',
                                   attributes: [],
                                   required: false,
                                 },
                             ],
                         },
                     ]
                   },
                 ],
                 where: {
                   workspace_id: user.last_workspace_id,
                   project_id: projectId
                 },
                 group: ['Module.id'],
               });
            }
            handleResultError({ message: messageFindFail(this.repository.getTableName()), messageDetail: 'Invalid user' });
        } catch (error) {
            handleResultError({ message: messageFindFail(this.repository.getTableName()), messageDetail: error });
        }
     }
}
