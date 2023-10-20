import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateModuleDto, UpdateModuleDto } from '../dto/Module.dto';
import { ModuleService } from '../service/Module.service';

@Controller()
@ApiTags('Module')
export class ModuleController {
    constructor(private readonly moduleService: ModuleService) { }
    @Post()
    create(@Body() module: CreateModuleDto) {
        return this.moduleService.create(module);
    }

    @Get()
    findAll() {
        return this.moduleService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.moduleService.findOneById(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() module: UpdateModuleDto) {
        return this.moduleService.updateById(+id, module);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.moduleService.removeById(+id);
    }
}
