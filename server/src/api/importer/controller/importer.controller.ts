import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { ImporterService } from '../service/importer.service';
import { CreateImporterDto, UpdateImporterDto } from '../dto/Importer.dto';
import { ApiTags } from '@nestjs/swagger';
import { handleResultSuccess } from 'src/helper/handleresult';

@Controller('importer')
@ApiTags('Importer')
export class ImporterController {
  constructor(private readonly importerService: ImporterService) {}
  @Post()
  create(@Body() importer: CreateImporterDto) {
    return handleResultSuccess(this.importerService.create(importer));
  }

  @Get()
  findAll() {
    return handleResultSuccess(this.importerService.findAll());
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return handleResultSuccess(this.importerService.findOneById(id));
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateImporterDto: UpdateImporterDto,
  ) {
    return handleResultSuccess(
      this.importerService.updateById(id, updateImporterDto),
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return handleResultSuccess(this.importerService.removeById(id));
  }
}
