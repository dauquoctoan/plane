import { Module } from '@nestjs/common';
import { UserService } from './service/User.service';
import { UserController } from './controller/User.controller';
import { User } from './entitys/User.entity';
import { SequelizeModule } from '@nestjs/sequelize';
import { WorkspaceModule } from '../workspace/workspace.module';
import { IssueModule } from '../issue/issue.module';
import { MeController } from './controller/me.controller';

@Module({
  imports: [WorkspaceModule, IssueModule, SequelizeModule.forFeature([User])],
  providers: [UserService],
  exports: [UserService],
  controllers: [UserController, MeController]
})

export class UserModule { }
