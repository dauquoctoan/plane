import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core'
import { StateModule } from './state/State.module';
import { UserModule } from './user/User.module';
import { WorkspaceModule } from './workspace/workspace.module';
import { ViewModule } from './view/view.module';
import { AnalyticModule } from './analytic/analytic.module';
import { ApiTokenModule } from './api_token/api_token.module';
import { AssetModule } from './asset/asset.module';
import { CycleModule } from './cycle/cycle.module';
import { ProjectModule } from './project/project.module';
import { PageModule } from './page/page.module';
import { NotificationModule } from './notification/notification.module';
import { ModuleModule } from './module/module.module';
import { IssueModule } from './issue/issue.module';
import { InboxModule } from './inbox/inbox.module';
import { ImporterModule } from './importer/importer.module';
import { ExporterModule } from './exporter/exporter.module';
import { EstimateModule } from './estimate/estimate.module';
import { AuthModule } from './auth/auth.module';
import { TestModule } from './test/test.module';
import { Test1Module } from './test1/test1.module';
import { SocialConnectionModule } from './social_connection/SocialConnection.module';

@Module({
    imports: [
        WorkspaceModule,
        StateModule,
        UserModule,
        ProjectModule,
        PageModule,
        NotificationModule,
        ModuleModule,
        IssueModule,
        InboxModule,
        ImporterModule,
        ExporterModule,
        EstimateModule,
        SocialConnectionModule,
        CycleModule,
        AssetModule,
        ApiTokenModule,
        AnalyticModule,
        ViewModule,
        AuthModule,
        TestModule,
        Test1Module,
        RouterModule.register([
            {
                path: 'api',
                module: ApiModule,
                children: [
                    { path: 'work-space', module: WorkspaceModule },
                    { path: 'state', module: StateModule },
                    { path: 'user', module: UserModule },
                    { path: 'project', module: ProjectModule },
                    { path: 'page', module: PageModule },
                    { path: 'notification', module: NotificationModule },
                    { path: 'module', module: ModuleModule },
                    { path: 'issue', module: IssueModule },
                    { path: 'inbox', module: InboxModule },
                    { path: 'importer', module: ImporterModule },
                    { path: 'exporter', module: ExporterModule },
                    { path: 'estimate', module: EstimateModule },
                    { path: 'social-connection', module: SocialConnectionModule },
                    { path: 'cycle', module: CycleModule },
                    { path: 'asset', module: AssetModule },
                    { path: 'api-token', module: ApiTokenModule },
                    { path: 'analytic', module: AnalyticModule },
                    { path: 'view', module: ViewModule },
                    { path: 'auth', module: AuthModule },
                    { path: 'test', module: TestModule },
                    { path: 'test1', module: Test1Module },
                ]
            },
        ]),
    ]
})

export class ApiModule { }


