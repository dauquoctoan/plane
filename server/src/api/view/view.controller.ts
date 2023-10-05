import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('view')
@ApiTags('view')
export class ViewController { }
