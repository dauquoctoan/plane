import { Module } from '@nestjs/common';
import { PageService } from './page.service';

@Module({
  providers: [PageService]
})
export class PageModule {}
