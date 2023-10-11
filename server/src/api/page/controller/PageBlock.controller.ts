import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreatePageBlockDto, UpdatePageBlockDto } from '../dto/PageBlock.dto';
import { PageBlockService } from '../service/PageBlock.service';

@Controller('pageBlock-block')
@ApiTags('PageBlock Block')
export class PageBlockBlockController {
    constructor(private readonly pageBlockService: PageBlockService) { }
    @Post()
    create(@Body() PageBlock: CreatePageBlockDto) {
        return this.pageBlockService.create(PageBlock);
    }

    @Get()
    findAll() {
        return this.pageBlockService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.pageBlockService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateWorkspaceDto: UpdatePageBlockDto) {
        return this.pageBlockService.updateById(+id, updateWorkspaceDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.pageBlockService.removeById(+id);
    }
}
