import { ApiTags } from '@nestjs/swagger';
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { EstimatePointService } from '../service/EstimatePoint.service';
import { CreateEstimatePointDto, UpdateEstimatePointDto } from '../dto/EstimatePoint.dto';
import { handleResultSuccess } from 'src/helper/handleresult';


@Controller('estimate-point')
@ApiTags('Estimate Point')
export class EstimatePointController {
    constructor(private readonly estimateService: EstimatePointService) { }
    @Post()
    create(@Body() estimatePoint: CreateEstimatePointDto) {
        return handleResultSuccess(this.estimateService.create(estimatePoint));
    }

    @Get()
    findAll() {
        return handleResultSuccess(this.estimateService.findAll());
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return handleResultSuccess(this.estimateService.findOneById(id));
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() estimatePoint: UpdateEstimatePointDto) {
        return handleResultSuccess(this.estimateService.updateById(id, estimatePoint));
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return handleResultSuccess(this.estimateService.removeById(id));
    }
}
