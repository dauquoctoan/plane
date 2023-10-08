import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('page')
@ApiTags('Page')
export class PageController { }
