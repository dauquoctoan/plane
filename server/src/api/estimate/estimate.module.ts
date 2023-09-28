import { Module } from '@nestjs/common';
import { EstimateService } from './estimate.service';

@Module({
  providers: [EstimateService]
})
export class EstimateModule {}
