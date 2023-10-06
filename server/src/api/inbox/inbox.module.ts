import { Module } from '@nestjs/common';
import { InboxService } from './inbox.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Inbox } from './entitys/Inbox.entiy';

@Module({
  imports: [SequelizeModule.forFeature([Inbox])],
  providers: [InboxService]
})
export class InboxModule { }
