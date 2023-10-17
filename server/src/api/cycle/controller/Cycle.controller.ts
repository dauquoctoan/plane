import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CycleService } from '../service/cycle.service';
import { CreateEstimateDto, UpdateEstimateDto } from 'src/api/estimate/dto/Estimate.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('Cycle')
export class CycleController {
    constructor(private readonly cycleService: CycleService) { }
    @Post()
    create(@Body() cycle: CreateEstimateDto) {
        return this.cycleService.create(cycle);
    }

    @Get()
    findAll() {
        return this.cycleService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.cycleService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() cycle: UpdateEstimateDto) {
        return this.cycleService.updateById(+id, cycle);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.cycleService.removeById(+id);
    }
}
