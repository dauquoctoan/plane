import { Module } from '@nestjs/common';
import { ModuleService } from './service/Module.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Module as ModuleEntity } from './entitys/Module.entity'
import { ModuleController } from './controller/ModuleFavorite.controller';

@Module({
  imports: [SequelizeModule.forFeature([ModuleEntity])],
  providers: [ModuleService],
  controllers: [ModuleController]
})

export class ModuleModule { }
