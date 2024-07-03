import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { BaseService } from 'src/api/Base.service';
import { PageBlock } from '../entitys/PageBlock.entity';
import { Repository } from 'sequelize-typescript';

@Injectable()
export class PageBlockService extends BaseService<PageBlock> {
  constructor(
    @InjectModel(PageBlock) public repository: Repository<PageBlock>,
  ) {
    super(repository);
  }
}
