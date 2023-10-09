import { Module } from '@nestjs/common';
import { ApiTokenService } from './service/ApiToken.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { APIToken } from './entitys/APIToken.entity';
import { ApiTokenController } from './controller/ApiToken.controller';

@Module({
  imports: [SequelizeModule.forFeature([APIToken])],
  providers: [ApiTokenService],
  controllers: [ApiTokenController]
})
export class ApiTokenModule { }
