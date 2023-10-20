import { Body, Controller, Delete, Get, Patch, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GlobalViewService } from '../service/GlobalView.service';
import { CreateGlobalViewDto, UpdateGlobalViewDto } from '../dto/GlobalView.dto';

@Controller('global-view')
@ApiTags('Global View')
export class GlobalViewController {
    constructor(private readonly globalView: GlobalViewService) { }
    @Post()
    create(@Body() globalView: CreateGlobalViewDto) {
        return this.globalView.create(globalView);
    }

    @Get()
    findAll() {
        return this.globalView.findAll();
    }

    @Get(':id')
    findOne(@Query('id') id: string) {
        return this.globalView.findOneById(+id);
    }

    @Patch(':id')
    update(@Query('id') id: string, @Body() globalView: UpdateGlobalViewDto) {
        return this.globalView.updateById(+id, globalView);
    }

    @Delete(':id')
    remove(@Query("id") id?: string) {
        return this.globalView.removeById(+id);
    }
}
