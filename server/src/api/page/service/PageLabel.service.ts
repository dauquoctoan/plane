import { Injectable } from '@nestjs/common';
import { Repository } from 'sequelize-typescript';
import { BaseService } from 'src/api/Base.service';
import { PageLabel } from '../entitys/PageLabel.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class PageLabelService extends BaseService<PageLabel> {
  constructor(
    @InjectModel(PageLabel) public repository: Repository<PageLabel>,
  ) {
    super(repository);
  }
}
