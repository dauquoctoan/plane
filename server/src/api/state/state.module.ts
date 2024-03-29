/* import lib nest */
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
/* feachture */
import { StateService } from './service/state.service';
import { StateController } from './controller/state.controller';
import { State } from './entitys/state.entity';

@Module({
  imports: [SequelizeModule.forFeature([State])],
  providers: [StateService],
  controllers: [StateController]
})

export class StateModule { }
