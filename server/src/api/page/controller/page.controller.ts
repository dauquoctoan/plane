import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PageService } from '../service/page.service';
import { CreatePageDto, UpdatePageDto } from '../dto/Page.dto';
import { handleResultSuccess } from 'src/helper/handleresult';

@Controller('page')
@ApiTags('Page')
export class PageController {
  constructor(private readonly pageService: PageService) {}
  @Post()
  async create(@Body() Page: CreatePageDto) {
    return handleResultSuccess(await this.pageService.create(Page));
  }

  @Get()
  async findAll(@Query('ProjectId') projectId: string) {
    return handleResultSuccess(
      await this.pageService.findPageByProject(projectId),
    );
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return handleResultSuccess(await this.pageService.findOneById(id));
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateWorkspaceDto: UpdatePageDto,
  ) {
    return handleResultSuccess(
      await this.pageService.updateById(id, updateWorkspaceDto),
    );
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return handleResultSuccess(await this.pageService.removeById(id));
  }
}
