import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ModuleIssue } from '../entitys/ModuleIssue.entity';
import { Repository } from 'sequelize-typescript';
import { BaseService } from 'src/api/Base.service';

@Injectable()
export class ModuleIssueService extends BaseService {
    constructor(@InjectModel(ModuleIssue) public repository: Repository<ModuleIssue>) {
        super(repository)
    }
}
