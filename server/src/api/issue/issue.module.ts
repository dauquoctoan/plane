import { Module, forwardRef } from '@nestjs/common';
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
import { IssueActivityService } from './service/IssueActivity.service';
import { IssueService } from './service/issue.service';
import { CommentReactionService } from './service/CommentReaction.service';
import { IssueAssigneeService } from './service/IssueAssignee.service';
import { IssueAttachmentService } from './service/IssueAttachment.service';
import { IssueBlockerService } from './service/IssueBlocker.service';
import { IssueCommentService } from './service/IssueComment.service';
import { IssueLabelService } from './service/IssueLabel.service';
import { IssueLinkService } from './service/IssueLink.service';
import { IssuePropertyService } from './service/IssueProperty.service';
import { IssueReactionService } from './service/IssueReaction.service';
import { IssueSubscriberService } from './service/IssueSubscriber.service';
import { IssueVoteService } from './service/IssueVote.service';
import { LabelService } from './service/Label.service';
import { IssueActivityController } from './controller/IssueActivity.controller';
import { IssueReactionController } from './controller/IssueReaction.controller';
import { IssueAssigneeController } from './controller/IssueAssignee.controller';
import { IssueAttachmentController } from './controller/IssueAttachment.controller';
import { IssueBlockerController } from './controller/IssueBlocker.controller';
import { IssueCommentController } from './controller/IssueComment.controller';
import { IssueLabelController } from './controller/IssueLabel.controller';
import { IssueLinkController } from './controller/IssueLink.controller';
import { IssuePropertyController } from './controller/IssueProperty.controller';
import { IssueVoteController } from './controller/IssueVote.controller';
import { LabelController } from './controller/Label.controller';
import { IssueSubscriberController } from './controller/IssueSubscriber.controller';
import { CommentReactionController } from './controller/CommentReaction.controller';
import { IssueRelation } from './entitys/IssueRelation.entity';
import { IssueSequence } from './entitys/IssueSequence.entity';
import { User } from '../user/entitys/User.entity';
import { CycleIssueService } from '../cycle/service/CycleIssue.service';
import { CycleModule } from '../cycle/cycle.module';
import { CycleIssue } from '../cycle/entitys/CycleIssue.entity';
import { ModuleIssue } from '../module/entitys/ModuleIssue.entity';
import { ModuleIssueService } from '../module/service/ModuleIssue.service';
import { UserService } from '../user/service/user.service';
import { IssueController } from './controller/issue.controller';

@Module({
  imports: [SequelizeModule.forFeature([
    Issue,
    IssueRelation,
    IssueSequence,
    CommentReaction,
    IssueActivity,
    IssueAssignee,
    IssueAttachment,
    IssueBlocker,
    IssueComment,
    IssueLabel,
    IssueLink,
    IssueProperty,
    IssueReaction,
    IssueSubscriber,
    IssueVote,
    Label,
    User,
    CycleIssue,
    ModuleIssue
  ]),
  forwardRef(() => CycleModule)
  ],
  providers: [
    CommentReactionService,
    IssueService,
    // IssueRelation,
    // IssueSequence,
    IssueActivityService,
    IssueAssigneeService,
    IssueAttachmentService,
    IssueBlockerService,
    IssueCommentService,
    IssueLabelService,
    IssueLinkService,
    IssuePropertyService,
    IssueReactionService,
    IssueSubscriberService,
    IssueVoteService,
    LabelService,
    UserService,
    CycleIssueService,
    ModuleIssueService
  ],
  controllers: [
    CommentReactionController,
    IssueController,
    IssueActivityController,
    IssueAssigneeController,
    IssueAttachmentController,
    IssueBlockerController,
    IssueCommentController,
    IssueLabelController,
    IssueLinkController,
    IssuePropertyController,
    IssueReactionController,
    IssueSubscriberController,
    IssueVoteController,
    LabelController
  ],
  exports: [IssueService, IssueLabelService, LabelService],
})
export class IssueModule { }
