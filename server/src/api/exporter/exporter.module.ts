import { Module } from '@nestjs/common';
import { ExporterService } from './service/ExporterHistory.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { ExporterHistory } from './entitys/ExporterHistory.entity';

@Module({
  imports: [SequelizeModule.forFeature([ExporterHistory])],
  providers: [ExporterService],
  controllers: [ExporterHistory]
})

export class ExporterModule { }
