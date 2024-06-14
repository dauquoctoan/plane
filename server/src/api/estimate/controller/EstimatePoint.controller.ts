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
    async create(@Body() estimatePoint: CreateEstimatePointDto) {
        return handleResultSuccess(await this.estimateService.create(estimatePoint));
    }

    @Get()
    async findAll() {
        return handleResultSuccess(await this.estimateService.findAll());
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return handleResultSuccess(await this.estimateService.findOneById(id));
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() estimatePoint: UpdateEstimatePointDto) {
        return handleResultSuccess(await this.estimateService.updateById(id, estimatePoint));
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        return handleResultSuccess(await this.estimateService.removeById(id));
    }
}
