/* import lib nest */
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
/* feachture */
import { StateService } from './service/state.service';
import { StateController } from './controller/state.controller';
import { State } from './entitys/state.entity';
import { User } from '../user/entitys/User.entity';
import { UserService } from '../user/service/user.service';

@Module({
  imports: [SequelizeModule.forFeature([State, User])],
  providers: [StateService, UserService],
  controllers: [StateController],
})
export class StateModule {}
