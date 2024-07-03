import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Notification } from '../entitys/Notification.entity';
import { Repository } from 'sequelize-typescript';
import { BaseService } from 'src/api/Base.service';

@Injectable()
export class NotificationService extends BaseService<Notification> {
  constructor(
    @InjectModel(Notification) public repository: Repository<Notification>,
  ) {
    super(repository);
  }
}
