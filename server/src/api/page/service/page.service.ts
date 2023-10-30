import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { BaseService } from 'src/api/Base.service';
import { Page } from '../entitys/Page.entity';
import { Repository } from 'sequelize-typescript';

@Injectable()
export class PageService extends BaseService<Page> {
    constructor(@InjectModel(Page) public repository: Repository<Page>) {
        super(repository)
    }
}
