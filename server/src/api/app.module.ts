import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { StateModule } from './state/state.module';
import { UserModule } from './user/user.module';
import { SearchModule } from './search/search.module';
import { ReleaseModule } from './release/release.module';
import { ProjectModule } from './project/project.module';
import { PageModule } from './page/page.module';
import { NotificationModule } from './notification/notification.module';
import { ModuleModule } from './module/module.module';
import { IssueModule } from './issue/issue.module';
import { InboxModule } from './inbox/inbox.module';
import { ImporterModule } from './importer/importer.module';
import { ExporterModule } from './exporter/exporter.module';
import { EstimateModule } from './estimate/estimate.module';
import { CycleModule } from './cycle/cycle.module';
import { AssetModule } from './asset/asset.module';
import { AnalyticModule } from './analytic/analytic.module';
import { ViewModule } from './view/view.module';
import { WorkspaceModule } from './workspace/workspace.module';
import { CONFIG_DB } from 'src/configs/db-config';
import { ApiTokenModule } from './api_token/api_token.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    SequelizeModule.forRootAsync(CONFIG_DB),
    StateModule,
    UserModule,
    SearchModule,
    ReleaseModule,
    ProjectModule,
    PageModule,
    NotificationModule,
    ModuleModule,
    IssueModule,
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
  ],
  controllers: [
    AppController,
  ],
  providers: [AppService],
})
export class AppModule { }
