import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { BaseService } from 'src/api/Base.service';
import { Importer } from '../entitys/Importer.entity';
import { Repository } from 'sequelize-typescript';

@Injectable()
export class ImporterService extends BaseService<Importer> {
  constructor(@InjectModel(Importer) public repository: Repository<Importer>) {
    super(repository);
  }
}
