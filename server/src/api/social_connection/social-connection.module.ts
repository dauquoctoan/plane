import { Module } from '@nestjs/common';
import { SocialConnectionController } from './controller/social-connection.controller';
import { SocialConnectionService } from './service/social-connection.service';

@Module({
  controllers: [SocialConnectionController],
  providers: [SocialConnectionService]
})

export class SocialConnectionModule { }
