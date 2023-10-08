import { Module } from '@nestjs/common';
import { NotificationService } from './service/notification.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Notification } from './entitys/Notification.entity';
import { NotificationController } from './controller/notification.controller';

@Module({
  imports: [SequelizeModule.forFeature([Notification])],
  providers: [NotificationService],
  controllers: [NotificationController],
})

export class NotificationModule { }
