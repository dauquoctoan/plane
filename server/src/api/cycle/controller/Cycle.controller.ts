import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Request as RequestNest, UseGuards } from '@nestjs/common';
import { CycleService } from '../service/cycle.service';
import { UpdateEstimateDto } from 'src/api/estimate/dto/Estimate.dto';
import { ApiBearerAuth, ApiQuery, ApiTags } from '@nestjs/swagger';
import { handleResultSuccess } from 'src/helper/handleresult';
import { IAuthRequest } from 'src/types/auth.types';
import { CreateCycleDto } from '../dto/Cycle.dto';
import { AuthGuard } from 'src/Guards/auth.guard';

@Controller('cycle')
@ApiTags('Cycle')
@ApiBearerAuth('access-token')
export class CycleController {
        constructor(private readonly cycleService: CycleService) { }
    @UseGuards(AuthGuard)
    @Post(':id')
    async create(@Body() cycle: CreateCycleDto, @Param('id') id: string, @RequestNest() request: IAuthRequest) {
        return handleResultSuccess(await this.cycleService.createCycle(id, request.user.id, cycle));
    }

    @Get()
    findAll() {
        return handleResultSuccess(this.cycleService.findAll());
    }

    @UseGuards(AuthGuard)
    @ApiQuery({
        name: 'type',
        required: false,
        enum:['active']
    })
    @Get(':id')
    async findOne(@Param('id') projectId: string, @Query('type') type:string, @RequestNest() request: IAuthRequest) {
        return handleResultSuccess(await this.cycleService.findCycleByProject(projectId, request.user.id, type));
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() cycle: UpdateEstimateDto) {
        return handleResultSuccess(await this.cycleService.updateById(id, cycle));
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        return handleResultSuccess(await this.cycleService.removeById(id));
    }
}
