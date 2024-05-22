import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SearchController } from './controller/Search.controller';
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
import { WorkspaceService } from '../workspace/service/workspace.service';
import { Workspace } from '../workspace/entitys/Workspace.entity';
import { WorkspaceMemberService } from '../workspace/service/WorkspaceMember.service';
import { WorkspaceMember } from '../workspace/entitys/WorkspaceMember.entity';
import { Project } from '../project/entitys/Project.entity';
import { ProjectService } from '../project/service/project.service';
import { ProjectMember } from '../project/entitys/ProjectMember.entity';
import { ProjectMemberService } from '../project/service/ProjectMember.service';

@Module({
  imports: [SequelizeModule.forFeature([State, Issue, ProjectMember, Project, User, Label, CycleIssue, ModuleIssue, Workspace, WorkspaceMember])],
  providers: [IssueService,StateService, UserService, ProjectMemberService, ProjectService, LabelService, CycleIssueService, WorkspaceMemberService, ModuleIssueService, WorkspaceService],
  controllers: [SearchController],
})

export class SearchModule { }
