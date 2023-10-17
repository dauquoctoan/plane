import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ApiTokenService } from '../service/ApiToken.service';
import { CreateAPITokenDto, UpdateAPITokenDto } from '../dto/APIToken.dto';

@Controller()
@ApiTags('Api Token')
export class ApiTokenController {
    constructor(private readonly apiTokenService: ApiTokenService) { }
    @Post()
    create(@Body() apiToken: CreateAPITokenDto) {
        return this.apiTokenService.create(apiToken);
    }

    @Get()
    findAll() {
        return this.apiTokenService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.apiTokenService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() apiToken: UpdateAPITokenDto) {
        return this.apiTokenService.updateById(+id, apiToken);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.apiTokenService.removeById(+id);
    }
}
