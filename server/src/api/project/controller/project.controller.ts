import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Product')
@Controller('project')
export class ProjectController {
    @Get()
    create() {
    }
}
