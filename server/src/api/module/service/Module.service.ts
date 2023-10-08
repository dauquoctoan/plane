import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Module } from '../entitys/Module.entity';
import { Repository } from 'sequelize-typescript';
import { BaseService } from 'src/api/Base.service';

@Injectable()
export class ModuleService extends BaseService {
    constructor(@InjectModel(Module) public repository: Repository<Module>) {
        super(repository)
    }
}
