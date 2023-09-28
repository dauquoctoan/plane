import { Module } from '@nestjs/common';
import { ModuleService } from './module.service';

@Module({
  providers: [ModuleService]
})
export class ModuleModule {}
