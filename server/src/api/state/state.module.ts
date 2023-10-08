/* import lib nest */
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
/* feachture */
import { StateService } from './service/State.service';
import { StateController } from './controller/State.controller';
import { State } from './entitys/State.entity';

@Module({
  imports: [SequelizeModule.forFeature([State])],
  providers: [StateService],
  controllers: [StateController]
})

export class StateModule { }
