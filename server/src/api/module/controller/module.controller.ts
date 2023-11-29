import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateModuleDto, UpdateModuleDto } from '../dto/Module.dto';
import { ModuleService } from '../service/Module.service';
import { handleResultSuccess } from 'src/helper/handleresult';

@Controller('Mmodule')
@ApiTags('Module')
export class ModuleController {
    constructor(private readonly moduleService: ModuleService) { }
    @Post()
    create(@Body() module: CreateModuleDto) {
        return handleResultSuccess(this.moduleService.create(module));
    }

    @Get()
    findAll() {
        return handleResultSuccess(this.moduleService.findAll());
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return handleResultSuccess(this.moduleService.findOneById(+id));
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() module: UpdateModuleDto) {
        return handleResultSuccess(this.moduleService.updateById(+id, module));
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return handleResultSuccess(this.moduleService.removeById(+id));
    }
}
