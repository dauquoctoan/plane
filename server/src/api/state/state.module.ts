/* import lib nest */
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
/* feachture */
import { StateService } from './state.service';
import { StateController } from './state.controller';
import { State } from './entitys/state.entity';

@Module({
  imports:[SequelizeModule.forFeature([State])],
  providers: [StateService],
  controllers: [StateController]
})

export class StateModule {}
