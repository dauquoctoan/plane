import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Request as RequestNest,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { handleResultSuccess } from 'src/helper/handleresult';
import { IAuthRequest } from 'src/types/auth.types';
import { CreateCycleDto } from '../dto/Cycle.dto';
import { AuthGuard } from 'src/Guards/auth.guard';
import { CycleUserPropertiesService } from '../service/CycleUserProperties.service';
import { UpdateCycleUserPropertiesDto } from '../dto/CycleUserProperties.dto';

@Controller('cycle-user-properties')
@ApiTags('Cycle')
@ApiBearerAuth('access-token')
export class CycleUserPropertiesController {
  constructor(private readonly cycleService: CycleUserPropertiesService) {}
  @UseGuards(AuthGuard)
  @Post(':id')
  async create(
    @Body() cycle: CreateCycleDto,
    @Param('id') id: string,
    @RequestNest() request: IAuthRequest,
  ) {
    return handleResultSuccess(await this.cycleService.create(cycle));
  }

  @UseGuards(AuthGuard)
  @Get(':cycleId/project/:projectId')
  async findOne(
    @Param('projectId') projectId: string,
    @Param('cycleId') cycleId: string,
    @RequestNest() request: IAuthRequest,
  ) {
    const res = await this.cycleService.findOrCreate(
      projectId,
      cycleId,
      request.user.id,
    );
    return handleResultSuccess(res[0].dataValues);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdateCycleUserPropertiesDto,
  ) {
    return handleResultSuccess(await this.cycleService.updateById(id, data));
  }
}
