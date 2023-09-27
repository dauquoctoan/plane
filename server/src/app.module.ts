import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { StateModule } from './state/state.module';
import { State } from './state/schema/state.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'plane',
      timezone: "+08:00",
      autoLoadModels: true,
      synchronize: true,
      models: [State]
    }),
    StateModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
