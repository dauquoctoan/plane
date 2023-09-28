import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { StateModule } from './state/state.module';
import { UserModule } from './user/user.module';
import { SearchController } from './search/search.controller';
import { SearchModule } from './search/search.module';
import { ReleaseController } from './release/release.controller';
import { ReleaseModule } from './release/release.module';
import { ProjectController } from './project/project.controller';
import { ProjectModule } from './project/project.module';
import { PageController } from './page/page.controller';
import { PageModule } from './page/page.module';
import { OauthController } from './oauth/oauth.controller';
import { OauthModule } from './oauth/oauth.module';
import { NotificationController } from './notification/notification.controller';
import { NotificationModule } from './notification/notification.module';
import { ModuleController } from './module/module.controller';
import { ModuleModule } from './module/module.module';
import { IssueController } from './issue/issue.controller';
import { IssueModule } from './issue/issue.module';
import { InboxController } from './inbox/inbox.controller';
import { InboxModule } from './inbox/inbox.module';
import { ImporterController } from './importer/importer.controller';
import { ImporterModule } from './importer/importer.module';
import { GptController } from './gpt/gpt.controller';
import { GptModule } from './gpt/gpt.module';
import { ExporterController } from './exporter/exporter.controller';
import { ExporterModule } from './exporter/exporter.module';
import { EstimateController } from './estimate/estimate.controller';
import { EstimateModule } from './estimate/estimate.module';
import { CycleController } from './cycle/cycle.controller';
import { CycleModule } from './cycle/cycle.module';
import { BaseController } from './base/base.controller';
import { BaseModule } from './base/base.module';
import { AuthenticationController } from './authentication/authentication.controller';
import { AuthenticationModule } from './authentication/authentication.module';
import { AuthExtendedController } from './auth_extended/auth_extended.controller';
import { AuthExtendedModule } from './auth_extended/auth_extended.module';
import { AssetController } from './asset/asset.controller';
import { AssetModule } from './asset/asset.module';
import { AnalyticController } from './analytic/analytic.controller';
import { AnalyticModule } from './analytic/analytic.module';
import { ViewController } from './view/view.controller';
import { ViewModule } from './view/view.module';
import { WorkspaceController } from './workspace/workspace.controller';
import { WorkspaceModule } from './workspace/workspace.module';
import { CONFIG_DB } from 'src/configs/db-config';
import { ApiTokenModule } from './api_token/api_token.module';
import { ApiTokenController } from './api_token/api_token.controller';
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
    OauthModule,
    NotificationModule,
    ModuleModule,
    IssueModule,
    InboxModule,
    ImporterModule,
    GptModule,
    ExporterModule,
    EstimateModule,
    CycleModule,
    BaseModule,
    AuthenticationModule,
    AuthExtendedModule,
    AssetModule,
    ApiTokenModule,
    AnalyticModule,
    ViewModule,
    WorkspaceModule,
  ],
  controllers: [
    AppController,
    SearchController,
    ReleaseController, 
    ProjectController, 
    PageController, 
    OauthController, 
    NotificationController, 
    ModuleController, 
    IssueController, 
    InboxController, 
    ImporterController, 
    GptController, 
    ExporterController, 
    EstimateController, 
    CycleController, 
    BaseController, 
    AuthenticationController, 
    AuthExtendedController, 
    AssetController, 
    ApiTokenController, 
    AnalyticController, 
    ViewController, 
    WorkspaceController
  ],
  providers: [AppService],
})
export class AppModule {}
