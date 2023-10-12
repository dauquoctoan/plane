import { Module } from '@nestjs/common';
import { Test1Service } from './test1.service';
import { Test1Controller } from './test1.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Test1 } from './entities/test1.entity';

@Module({
  imports: [SequelizeModule.forFeature([Test1])],
  controllers: [Test1Controller],
  providers: [Test1Service],
})
export class Test1Module { }
