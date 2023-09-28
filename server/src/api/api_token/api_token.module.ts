import { Module } from '@nestjs/common';
import { ApiTokenService } from './api_token.service';

@Module({
  providers: [ApiTokenService]
})
export class ApiTokenModule {}
