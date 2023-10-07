import { Module } from '@nestjs/common';
import { IssueService } from './service/issue.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Issue } from './entitys/Issue.entity';
import { CommentReaction } from './entitys/CommentReaction.entity';
import { IssueActivity } from './entitys/IssueActivity.entity';
import { IssueAssignee } from './entitys/IssueAssignee.entity';
import { IssueAttachment } from './entitys/IssueAttachment.entity';
import { IssueBlocker } from './entitys/IssueBlocker.entity';
import { IssueComment } from './entitys/IssueComment.entity';
import { IssueLabel } from './entitys/IssueLabel.entity';
import { IssueLink } from './entitys/IssueLink.entity';
import { IssueProperty } from './entitys/IssueProperty.entity';
import { IssueReaction } from './entitys/IssueReaction.entity';
import { IssueSubscriber } from './entitys/IssueSubscriber.entity';
import { IssueVote } from './entitys/IssueVote.entity';
import { Label } from './entitys/Label.entity';

@Module({
  imports: [SequelizeModule.forFeature([Issue, CommentReaction, IssueActivity, IssueAssignee, IssueAttachment, IssueBlocker, IssueComment, IssueLabel, IssueLink, IssueProperty, IssueReaction, IssueSubscriber, IssueVote, Label])],
  providers: [],
  controllers: []
})
export class IssueModule { }
