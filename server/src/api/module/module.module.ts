import { Module } from '@nestjs/common';
import { ModuleService } from './service/Module.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Module as ModuleEntity } from './entitys/Module.entity';
import { ModuleFavorite } from './entitys/ModuleFavorite.entity';
import { ModuleIssue } from './entitys/ModuleIssue.entity';
import { ModuleLink } from './entitys/ModuleLink.entity';
import { ModuleMember } from './entitys/ModuleMember.entity';
import { ModuleLinkController } from './controller/ModuleLink.controller';
import { ModuleLinkService } from './service/ModuleLink.service';
import { ModuleIssueService } from './service/ModuleIssue.service';
import { ModuleFavoriteService } from './service/ModuleFavorite.service';
import { ModuleMemberService } from './service/ModuleMember.service';
import { ModuleController } from './controller/module.controller';
import { ModuleIssueController } from './controller/ModuleIssue.controller';
import { ModuleFavoriteController } from './controller/ModuleFavorite.controller';
import { ModuleMemberController } from './controller/ModuleMember.controller';
import { User } from '../user/entitys/User.entity';
import { UserService } from '../user/service/user.service';
import { ModuleUserProperties } from './entitys/ModuleUserProperties.entity';
import { ModuleUserPropertiesService } from './service/ModuleUserProperties.service';
import { ModuleUserPropertiesController } from './controller/ModuleUserProperties.controller';

@Module({
  imports: [
    SequelizeModule.forFeature([
      ModuleEntity,
      ModuleFavorite,
      ModuleIssue,
      ModuleLink,
      ModuleMember,
      User,
      ModuleUserProperties,
    ]),
  ],
  providers: [
    ModuleService,
    ModuleLinkService,
    ModuleIssueService,
    ModuleFavoriteService,
    ModuleMemberService,
    UserService,
    ModuleUserPropertiesService,
  ],
  controllers: [
    ModuleController,
    ModuleLinkController,
    ModuleIssueController,
    ModuleFavoriteController,
    ModuleMemberController,
    ModuleUserPropertiesController,
  ],
})
export class ModuleModule {}
