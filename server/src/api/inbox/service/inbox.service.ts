import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Repository } from 'sequelize-typescript';
import { Inbox } from '../entitys/Inbox.entiy';
import { BaseService } from 'src/api/Base.service';

@Injectable()
export class InboxService extends BaseService<Inbox> {
    constructor(@InjectModel(Inbox) public repository: Repository<Inbox>) {
        super(repository)
    }
}
