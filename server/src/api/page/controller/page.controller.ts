import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PageService } from '../service/page.service';
import { CreatePageDto, UpdatePageDto } from '../dto/Page.dto';
import { handleResultSuccess } from 'src/helper/handleresult';

@Controller('page')
@ApiTags('Page')
export class PageController {
    constructor(private readonly pageService: PageService) { }
    @Post()
    create(@Body() Page: CreatePageDto) {
        return handleResultSuccess(this.pageService.create(Page));
    }

    @Get()
    findAll() {
        return handleResultSuccess(this.pageService.findAll());
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return handleResultSuccess(this.pageService.findOneById(+id));
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateWorkspaceDto: UpdatePageDto) {
        return handleResultSuccess(this.pageService.updateById(+id, updateWorkspaceDto));
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return handleResultSuccess(this.pageService.removeById(+id));
    }
}
