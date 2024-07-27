import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Request,
  UseGuards,
} from '@nestjs/common';
import { EstimateService } from '../service/Estimate.service';
import { CreateEstimateDto, UpdateEstimateDto } from '../dto/Estimate.dto';
import { ApiTags } from '@nestjs/swagger';
import { handleResultSuccess } from 'src/helper/handleresult';
import { IAuthRequest } from 'src/types/auth.types';
import { AuthGuard } from 'src/Guards/auth.guard';

@Controller('estimate')
@ApiTags('Estimate')
export class EstimateController {
  constructor(private readonly estimateService: EstimateService) {}
  
  @UseGuards(AuthGuard)
  @Post()
  async create(
    @Body() estimate: CreateEstimateDto,
    @Request() request: IAuthRequest,
  ) {
    return handleResultSuccess(await this.estimateService.createEstimate(estimate, request.user.id));
  }

  @Get()
  async findAll(@Query('projectId') projectId: string) {
    return handleResultSuccess(await this.estimateService.findEstimateByProject(projectId));
  }

  @Get(':id')
  async findOne(@Param('id') estimateId: string) {
    return handleResultSuccess(await this.estimateService.findEstimateById(estimateId));
  }

  @UseGuards(AuthGuard)
  @Patch()
  async update(@Param('id') id: string, @Body() estimate: UpdateEstimateDto, @Request() request: IAuthRequest) {
    return handleResultSuccess(
      await this.estimateService.updateEstimate(estimate, request.user.id),
    );
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return handleResultSuccess(await this.estimateService.removeById(id));
  }
}
