import { Module } from '@nestjs/common';
import { TestService } from './test.service';
import { TestController } from './test.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Test } from './entities/test.entity';

@Module({
  imports: [SequelizeModule.forFeature([Test])],
  controllers: [TestController],
  providers: [TestService],
})
export class TestModule { }
