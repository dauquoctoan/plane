import { Module } from '@nestjs/common';
import { AuthExtendedService } from './auth_extended.service';

@Module({
  providers: [AuthExtendedService]
})
export class AuthExtendedModule {}
