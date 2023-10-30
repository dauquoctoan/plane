import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ModuleIssue } from '../entitys/ModuleIssue.entity';
import { Repository } from 'sequelize-typescript';
import { BaseService } from 'src/api/Base.service';
import { ModuleFavorite } from '../entitys/ModuleFavorite.entity';

@Injectable()
export class ModuleFavoriteService extends BaseService<ModuleFavorite>{
    constructor(@InjectModel(ModuleFavorite) public repository: Repository<ModuleFavorite>) {
        super(repository)
    }
}
