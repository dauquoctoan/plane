import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AnalyticViewService } from '../service/analytic.service';
import { CreateAnalyticViewDto, UpdateAnalyticViewDto } from '../dto/AnalyticView.dto';

@Controller()
@ApiTags('Analytic')
export class AnalyticViewController {
    constructor(private readonly analyticViewService: AnalyticViewService) { }
    @Post()
    create(@Body() analytic: CreateAnalyticViewDto) {
        return this.analyticViewService.create(analytic);
    }

    @Get()
    findAll() {
        return this.analyticViewService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.analyticViewService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() analytic: UpdateAnalyticViewDto) {
        return this.analyticViewService.updateById(+id, analytic);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.analyticViewService.removeById(+id);
    }
}
