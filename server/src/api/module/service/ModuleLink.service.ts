import { Injectable } from '@nestjs/common';
import { ModuleLink } from '../entitys/ModuleLink.entity';
import { Repository } from 'sequelize-typescript';
import { InjectModel } from '@nestjs/sequelize';
import { BaseService } from 'src/api/Base.service';

@Injectable()
export class ModuleLinkService extends BaseService<ModuleLink> {
  constructor(
    @InjectModel(ModuleLink) public repository: Repository<ModuleLink>,
  ) {
    super(repository);
  }
}
