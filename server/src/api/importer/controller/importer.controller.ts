import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { Importer } from '../entitys/Importer.entity';
import { ImporterService } from '../service/importer.service';
import { CreateImporterDto, UpdateImporterDto } from '../dto/Importer.dto';
import { ApiTags } from '@nestjs/swagger';


@Controller('importer')
@ApiTags('importer')
export class ImporterController {
    constructor(private readonly importerService: ImporterService) { }
    @Post()
    create(@Body() importer: CreateImporterDto) {
        return this.importerService.create(importer);
    }

    @Get()
    findAll() {
        return this.importerService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.importerService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateImporterDto: UpdateImporterDto) {
        return this.importerService.updateById(+id, updateImporterDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.importerService.removeById(+id);
    }
}
