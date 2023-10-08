import { Module } from '@nestjs/common';
import { ApiTokenService } from './service/ApiToken.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { APIToken } from './entitys/APIToken.entity';

@Module({
  imports: [SequelizeModule.forFeature([APIToken])],
  providers: [ApiTokenService],
  controllers: [ApiTokenService]
})
export class ApiTokenModule { }
