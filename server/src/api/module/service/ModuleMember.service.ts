import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { BaseService } from 'src/api/Base.service';
import { ModuleMember } from '../entitys/ModuleMember.entity';
import { Repository } from 'sequelize-typescript';

@Injectable()
export class ModuleMemberService extends BaseService<ModuleMember>{
    constructor(@InjectModel(ModuleMember) public repository: Repository<ModuleMember>) {
        super(repository)
    }
}
