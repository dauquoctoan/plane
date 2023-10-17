import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ExporterService } from '../service/ExporterHistory.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateExporterHistoryDto, UpdateExporterHistoryDto } from '../dto/ExporterHistory.dto';

@Controller()
@ApiTags('Exporter')
export class ExporterHistoryController {
    constructor(private readonly exporterService: ExporterService) { }
    @Post()
    create(@Body() exporter: CreateExporterHistoryDto) {
        return this.exporterService.create(exporter);
    }

    @Get()
    findAll() {
        return this.exporterService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.exporterService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() exporter: UpdateExporterHistoryDto) {
        return this.exporterService.updateById(+id, exporter);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.exporterService.removeById(+id);
    }
}
