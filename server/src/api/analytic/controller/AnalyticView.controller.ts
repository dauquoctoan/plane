import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AnalyticViewService } from '../service/analytic.service';
import { CreateAnalyticViewDto, UpdateAnalyticViewDto } from '../dto/AnalyticView.dto';
import { handleResultSuccess } from 'src/helper/handleresult';

@Controller()
@ApiTags('Analytic')
export class AnalyticViewController {
    constructor(private readonly analyticViewService: AnalyticViewService) { }
    @Post()
    create(@Body() analytic: CreateAnalyticViewDto) {
        return handleResultSuccess(this.analyticViewService.create(analytic))
    }

    @Get()
    findAll() {
        return handleResultSuccess(this.analyticViewService.findAll());
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return handleResultSuccess(this.analyticViewService.findOneById(+id));
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() analytic: UpdateAnalyticViewDto) {
        return handleResultSuccess(this.analyticViewService.updateById(+id, analytic));
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return handleResultSuccess(this.analyticViewService.removeById(+id));
    }
}
