import { Body, Controller, Delete, Get, Patch, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GlobalViewService } from '../service/GlobalView.service';
import { CreateGlobalViewDto, UpdateGlobalViewDto } from '../dto/GlobalView.dto';
import { handleResultSuccess } from 'src/helper/handleresult';

@Controller('global-view')
@ApiTags('Global View')
export class GlobalViewController {
    constructor(private readonly globalView: GlobalViewService) { }
    @Post()
    create(@Body() globalView: CreateGlobalViewDto) {
        return handleResultSuccess(this.globalView.create(globalView));
    }

    @Get()
    findAll() {
        return handleResultSuccess(this.globalView.findAll());
    }

    @Get(':id')
    findOne(@Query('id') id: string) {
        return handleResultSuccess(this.globalView.findOneById(id));
    }

    @Patch(':id')
    update(@Query('id') id: string, @Body() globalView: UpdateGlobalViewDto) {
        return handleResultSuccess(this.globalView.updateById(id, globalView));
    }

    @Delete(':id')
    remove(@Query("id") id?: string) {
        return handleResultSuccess(this.globalView.removeById(id));
    }
}
