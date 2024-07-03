import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ExporterService } from '../service/ExporterHistory.service';
import { ApiTags } from '@nestjs/swagger';
import {
  CreateExporterHistoryDto,
  UpdateExporterHistoryDto,
} from '../dto/ExporterHistory.dto';
import { handleResultSuccess } from 'src/helper/handleresult';

@Controller('exporter')
@ApiTags('Exporter')
export class ExporterHistoryController {
  constructor(private readonly exporterService: ExporterService) {}
  @Post()
  create(@Body() exporter: CreateExporterHistoryDto) {
    return handleResultSuccess(this.exporterService.create(exporter));
  }

  @Get()
  findAll() {
    return handleResultSuccess(this.exporterService.findAll());
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return handleResultSuccess(this.exporterService.findOneById(id));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() exporter: UpdateExporterHistoryDto) {
    return handleResultSuccess(this.exporterService.updateById(id, exporter));
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return handleResultSuccess(this.exporterService.removeById(id));
  }
}
