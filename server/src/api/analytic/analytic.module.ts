import { Module } from '@nestjs/common';
import { AnalyticViewService } from './service/analytic.service';
import { AnalyticView } from './entitys/AnalyticView.entity';
import { SequelizeModule } from '@nestjs/sequelize';
import { AnalyticViewController } from './controller/AnalyticView.controller';
import { IssueService } from '../issue/service/issue.service';
import { Issue } from '../issue/entitys/Issue.entity';
import { User } from '../user/entitys/User.entity';
import { UserService } from '../user/service/user.service';
import { LabelService } from '../issue/service/Label.service';
import { Label } from '../issue/entitys/Label.entity';
import { CycleIssue } from '../cycle/entitys/CycleIssue.entity';
import { CycleIssueService } from '../cycle/service/CycleIssue.service';
import { ModuleIssueService } from '../module/service/ModuleIssue.service';
import { ModuleIssue } from '../module/entitys/ModuleIssue.entity';
import { State } from '../state/entitys/state.entity';
import { StateService } from '../state/service/state.service';

@Module({
  imports: [SequelizeModule.forFeature([AnalyticView,State, Issue, User, Label, CycleIssue, ModuleIssue])],
  providers: [AnalyticViewService, IssueService,StateService, UserService, LabelService, CycleIssueService, ModuleIssueService],
  controllers: [AnalyticViewController],
})

export class AnalyticModule { }
