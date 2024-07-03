import { Module, RequestMethod } from '@nestjs/common';
import { ImporterService } from './service/importer.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Importer } from './entitys/Importer.entity';
import { ImporterController } from './controller/importer.controller';

@Module({
  imports: [SequelizeModule.forFeature([Importer])],
  providers: [ImporterService],
  controllers: [ImporterController],
})
export class ImporterModule {}
