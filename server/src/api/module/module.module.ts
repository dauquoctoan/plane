import { Module } from '@nestjs/common';
import { ModuleService } from './service/Module.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Module as ModuleEntity } from './entitys/Module.entity'
import { ModuleController } from './controller/ModuleFavorite.controller';
import { ModuleFavorite } from './entitys/ModuleFavorite.entity';
import { ModuleIssue } from './entitys/ModuleIssue.entity';
import { ModuleLink } from './entitys/ModuleLink.entity';
import { ModuleMember } from './entitys/ModuleMember.entity';

@Module({
  imports: [SequelizeModule.forFeature([ModuleEntity, ModuleFavorite, ModuleIssue, ModuleLink, ModuleMember])],
  providers: [ModuleService],
  controllers: [ModuleController]
})

export class ModuleModule { }
