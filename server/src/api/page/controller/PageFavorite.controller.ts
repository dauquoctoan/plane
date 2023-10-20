import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PageFavoriteService } from '../service/PageFavorite.service';
import { CreatePageFavoriteDto, UpdatePageFavoriteDto } from '../dto/PageFavorite.dto';
@Controller('page-favorite')
@ApiTags('Page Favorite')
export class PageFavoriteController {
    constructor(private readonly pageFavoriteService: PageFavoriteService) { }
    @Post()
    create(@Body() PageFavorite: CreatePageFavoriteDto) {
        return this.pageFavoriteService.create(PageFavorite);
    }

    @Get()
    findAll() {
        return this.pageFavoriteService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.pageFavoriteService.findOneById(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateWorkspaceDto: UpdatePageFavoriteDto) {
        return this.pageFavoriteService.updateById(+id, updateWorkspaceDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.pageFavoriteService.removeById(+id);
    }
}
