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
import { PageFavoriteService } from '../service/PageFavorite.service';
import {
  CreatePageFavoriteDto,
  UpdatePageFavoriteDto,
} from '../dto/PageFavorite.dto';
import { handleResultSuccess } from 'src/helper/handleresult';
@Controller('page-favorite')
@ApiTags('Page Favorite')
export class PageFavoriteController {
  constructor(private readonly pageFavoriteService: PageFavoriteService) {}
  @Post()
  create(@Body() PageFavorite: CreatePageFavoriteDto) {
    return handleResultSuccess(this.pageFavoriteService.create(PageFavorite));
  }

  @Get()
  findAll() {
    return handleResultSuccess(this.pageFavoriteService.findAll());
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return handleResultSuccess(this.pageFavoriteService.findOneById(id));
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateWorkspaceDto: UpdatePageFavoriteDto,
  ) {
    return handleResultSuccess(
      this.pageFavoriteService.updateById(id, updateWorkspaceDto),
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return handleResultSuccess(this.pageFavoriteService.removeById(id));
  }
}
