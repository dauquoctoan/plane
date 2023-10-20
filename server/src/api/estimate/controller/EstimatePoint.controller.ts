import { ApiTags } from '@nestjs/swagger';
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { EstimatePointService } from '../service/EstimatePoint.service';
import { CreateEstimatePointDto, UpdateEstimatePointDto } from '../dto/EstimatePoint.dto';


@Controller('estimate-point')
@ApiTags('Estimate Point')
export class EstimatePointController {
    constructor(private readonly estimateService: EstimatePointService) { }
    @Post()
    create(@Body() estimatePoint: CreateEstimatePointDto) {
        return this.estimateService.create(estimatePoint);
    }

    @Get()
    findAll() {
        return this.estimateService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.estimateService.findOneById(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() estimatePoint: UpdateEstimatePointDto) {
        return this.estimateService.updateById(+id, estimatePoint);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.estimateService.removeById(+id);
    }
}
