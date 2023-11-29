import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CycleService } from '../service/cycle.service';
import { CreateEstimateDto, UpdateEstimateDto } from 'src/api/estimate/dto/Estimate.dto';
import { ApiTags } from '@nestjs/swagger';
import { handleResultSuccess } from 'src/helper/handleresult';

@Controller('cycle')
@ApiTags('Cycle')
export class CycleController {
    constructor(private readonly cycleService: CycleService) { }
    @Post()
    create(@Body() cycle: CreateEstimateDto) {
        return handleResultSuccess(this.cycleService.create(cycle));
    }

    @Get()
    findAll() {
        return handleResultSuccess(this.cycleService.findAll());
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return handleResultSuccess(this.cycleService.findOneById(+id));
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() cycle: UpdateEstimateDto) {
        return handleResultSuccess(this.cycleService.updateById(+id, cycle));
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return handleResultSuccess(this.cycleService.removeById(+id));
    }
}
