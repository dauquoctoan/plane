// import { Module } from '@nestjs/common';
// import { UserService } from './service/user.service';
// import { UserController } from './controller/user.controller';
// import { User } from './entitys/User.entity';
// import { SequelizeModule } from '@nestjs/sequelize';
// import { WorkspaceModule } from '../workspace/workspace.module';
// import { IssueModule } from '../issue/issue.module';
// import { MeController } from './controller/me.controller';

import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "./entitys/User.entity";
import { UserService } from "./service/user.service";
import { UserController } from "./controller/user.controller";
import { MeController } from "./controller/me.controller";
import { Module } from "@nestjs/common";
import { PinController } from "./controller/pin.controller";
import { PinService } from "./service/pin.service";

@Module({
  imports: [SequelizeModule.forFeature([User])],
  providers: [UserService, PinService],
  exports: [UserService],
  controllers: [UserController, MeController, PinController ]
})

export class UserModule { }
