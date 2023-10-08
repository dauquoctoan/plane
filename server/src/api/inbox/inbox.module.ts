import { Module } from '@nestjs/common';
import { InboxService } from './service/inbox.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Inbox } from './entitys/Inbox.entiy';
import { InboxController } from './controller/inbox.controller';
import { InboxIssueController } from './controller/InboxIssue.controller';
import { InboxIssue } from './entitys/InboxIssue.entity';
import { InboxIssueService } from './service/InboxIssue.service';

@Module({
  imports: [SequelizeModule.forFeature([Inbox, InboxIssue])],
  providers: [InboxService, InboxIssueService],
  controllers: [InboxController, InboxIssueController]
})

export class InboxModule { }
