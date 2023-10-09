import { Module } from '@nestjs/common';
import { ExporterService } from './service/ExporterHistory.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { ExporterHistory } from './entitys/ExporterHistory.entity';
import { ExporterHistoryController } from './controller/ExporterHistory.controller';

@Module({
  imports: [SequelizeModule.forFeature([ExporterHistory])],
  providers: [ExporterService],
  controllers: [ExporterHistoryController]
})

export class ExporterModule { }
