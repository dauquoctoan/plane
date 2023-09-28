import { Module } from '@nestjs/common';
import { SocialConnectionController } from './social_connection.controller';
import { SocialConnectionService } from './social_connection.service';

@Module({
  controllers: [SocialConnectionController],
  providers: [SocialConnectionService]
})
export class SocialConnectionModule {}
