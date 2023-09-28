import { Module } from '@nestjs/common';
import { StateService } from './state.service';
import { StateController } from './state.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { State } from './entity/state.entity';

@Module({
  imports:[SequelizeModule.forFeature([State])],
  providers: [StateService],
  controllers: [StateController]
})

export class StateModule {}
