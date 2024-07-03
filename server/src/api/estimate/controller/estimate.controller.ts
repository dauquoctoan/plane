import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Request,
} from '@nestjs/common';
import { EstimateService } from '../service/estimate.service';
import { CreateEstimateDto, UpdateEstimateDto } from '../dto/Estimate.dto';
import { ApiTags } from '@nestjs/swagger';
import { handleResultSuccess } from 'src/helper/handleresult';
import { IAuthRequest } from 'src/types/auth.types';

@Controller('estimate')
@ApiTags('Estimate')
export class EstimateController {
  constructor(private readonly estimateService: EstimateService) {}
  @Post()
  async create(
    @Body() estimate: CreateEstimateDto,
    @Request() request: IAuthRequest,
  ) {
    return handleResultSuccess(await this.estimateService.create(estimate));
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
  async update(@Param('id') id: string, @Body() estimate: UpdateEstimateDto) {
    return handleResultSuccess(
      await this.estimateService.updateById(id, estimate),
    );
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return handleResultSuccess(await this.estimateService.removeById(id));
  }
}
