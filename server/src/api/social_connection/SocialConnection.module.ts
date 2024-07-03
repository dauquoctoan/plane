import { SocialLoginConnectionController } from './controller/SocialLoginConnection.controller';
import { SocialLoginConnection } from './entitys/SocialLoginConnection.entity';
import { SocialLoginConnectionService } from './service/SocialConnection.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';

@Module({
  imports: [SequelizeModule.forFeature([SocialLoginConnection])],
  controllers: [SocialLoginConnectionController],
  providers: [SocialLoginConnectionService],
})
export class SocialConnectionModule {}
