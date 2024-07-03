import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PageLabelService } from '../service/PageLabel.service';
import { CreatePageLabelDto, UpdatePageLabelDto } from '../dto/PageLabel.dto';
import { handleResultSuccess } from 'src/helper/handleresult';

@Controller('page-label')
@ApiTags('Page Label')
export class PageLabelController {
  constructor(private readonly pageLabelService: PageLabelService) {}
  @Post()
  create(@Body() PageLabel: CreatePageLabelDto) {
    return handleResultSuccess(this.pageLabelService.create(PageLabel));
  }

  @Get()
  findAll() {
    return handleResultSuccess(this.pageLabelService.findAll());
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return handleResultSuccess(this.pageLabelService.findOneById(id));
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateWorkspaceDto: UpdatePageLabelDto,
  ) {
    return handleResultSuccess(
      this.pageLabelService.updateById(id, updateWorkspaceDto),
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return handleResultSuccess(this.pageLabelService.removeById(id));
  }
}
