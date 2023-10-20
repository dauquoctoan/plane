import { ApiTags } from '@nestjs/swagger';
import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { ModuleLinkService } from '../service/ModuleLink.service';
import { CreateModuleLinkDto, UpdateModuleLinkDto } from '../dto/ModuleLink.dto';

@Controller('module-link')
@ApiTags('Module Link')
export class ModuleLinkController {
    constructor(private readonly moduleLinkService: ModuleLinkService) { }
    @Post()
    create(@Body() module: CreateModuleLinkDto) {
        return this.moduleLinkService.create(module);
    }

    @Get()
    findAll() {
        return this.moduleLinkService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.moduleLinkService.findOneById(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() module: UpdateModuleLinkDto) {
        return this.moduleLinkService.updateById(+id, module);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.moduleLinkService.removeById(+id);
    }
}
