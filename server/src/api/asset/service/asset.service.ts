import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { BaseService } from 'src/api/Base.service';
import { FileAsset } from '../entitys/FileAsset.entity';
import { Repository } from 'sequelize-typescript';

@Injectable()
export class FileAssetService extends BaseService<FileAsset> {
  constructor(
    @InjectModel(FileAsset) public repository: Repository<FileAsset>,
  ) {
    super(repository);
  }
}
