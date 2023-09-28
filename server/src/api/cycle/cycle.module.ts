import { Module } from '@nestjs/common';
import { CycleService } from './cycle.service';

@Module({
  providers: [CycleService]
})
export class CycleModule {}
