import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ModuleIssue } from '../entitys/ModuleIssue.entity';
import { Repository } from 'sequelize-typescript';
import { BaseService } from 'src/api/Base.service';
import { handleResultError } from 'src/helper/handleresult';
import { messageCreateFail } from 'src/helper/message.create';
import { CreateModuleIssueDto } from '../dto/ModuleIssue.dto';

@Injectable()
export class ModuleIssueService extends BaseService<ModuleIssue> {
    constructor(@InjectModel(ModuleIssue) public repository: Repository<ModuleIssue>) {
        super(repository)
    }

    async createModuleIssue(moduleIssueData: CreateModuleIssueDto) {
        try {
            return await this.repository.create(moduleIssueData)
        } catch (error) {
            handleResultError({ message: messageCreateFail(this.repository.getTableName()), messageDetail: error })
        }
    }
}
