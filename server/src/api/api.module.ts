import { Module } from '@nestjs/common';
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

@Module({
    imports: [
        StateModule,
        UserModule,
        // ProjectModule,
        //PageModule,
        NotificationModule,
        ModuleModule,
        //IssueModule,
        InboxModule,
        ImporterModule,
        ExporterModule,
        EstimateModule,
        CycleModule,
        AssetModule,
        ApiTokenModule,
        AnalyticModule,
        ViewModule,
        WorkspaceModule,
    ]
})

export class ApiModule { }
