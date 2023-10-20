import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { EstimateService } from '../service/estimate.service';
import { CreateEstimateDto, UpdateEstimateDto } from '../dto/Estimate.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('Estimate')
export class EstimateController {
    constructor(private readonly estimateService: EstimateService) { }
    @Post()
    create(@Body() estimate: CreateEstimateDto) {
        return this.estimateService.create(estimate);
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
    update(@Param('id') id: string, @Body() estimate: UpdateEstimateDto) {
        return this.estimateService.updateById(+id, estimate);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.estimateService.removeById(+id);
    }
}
