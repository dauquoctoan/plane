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
import { CreatePageBlockDto, UpdatePageBlockDto } from '../dto/PageBlock.dto';
import { PageBlockService } from '../service/PageBlock.service';
import { handleResultSuccess } from 'src/helper/handleresult';

@Controller('pageBlock-block')
@ApiTags('PageBlock Block')
export class PageBlockBlockController {
  constructor(private readonly pageBlockService: PageBlockService) {}
  @Post()
  create(@Body() PageBlock: CreatePageBlockDto) {
    return handleResultSuccess(this.pageBlockService.create(PageBlock));
  }

  @Get()
  findAll() {
    return handleResultSuccess(this.pageBlockService.findAll());
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return handleResultSuccess(this.pageBlockService.findOneById(id));
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateWorkspaceDto: UpdatePageBlockDto,
  ) {
    return handleResultSuccess(
      this.pageBlockService.updateById(id, updateWorkspaceDto),
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return handleResultSuccess(this.pageBlockService.removeById(id));
  }
}
