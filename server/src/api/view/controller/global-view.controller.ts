import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('global-view')
@ApiTags('Global View')
export class GlobalViewController { }
