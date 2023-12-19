import { Controller, Post, Body, Get, Param, Patch, Delete, Request as RequestNestjs, UseGuards } from '@nestjs/common';
import { StateService } from '../service/State.service';
import { CreateStateDto, UpdateStateDto } from '../dto/State.dto';
import jstz from 'jstz';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { handleResultSuccess } from 'src/helper/handleresult';
import { IAuthRequest } from 'src/types/auth.types';
import { AuthGuard } from 'src/Guards/auth.guard';
import { Op } from "sequelize";

@Controller('state')
@ApiTags('state')
@ApiBearerAuth('access-token')
export class StateController {
  constructor(private readonly stateService: StateService) { }

  @Post()
  @UseGuards(AuthGuard)
  async createState(@Body() state: CreateStateDto, @RequestNestjs() request: IAuthRequest) {
    return handleResultSuccess(await this.stateService.create({ ...state, created_by: request.user.id }));
  }

  @Post('default')
  async createStateDefault() {
    return handleResultSuccess(await this.stateService.createAll());
  }

  @Get()
  async findAll() {
    return handleResultSuccess(await this.stateService.findAll())
  }

  @Get('project/:id')
  @UseGuards(AuthGuard)
  async findStateByProject(@Param('id') id: string, @RequestNestjs() request: IAuthRequest) {
    return handleResultSuccess(await this.stateService.findState(id, request.user.id));
  }

  @Get('default')
  @UseGuards(AuthGuard)
  async findDefaultStateBy() {
    return handleResultSuccess(await this.stateService.findDefaultState());
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateWorkspaceDto: UpdateStateDto) {
    return handleResultSuccess(await this.stateService.updateById(id, updateWorkspaceDto));
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return handleResultSuccess(await this.stateService.removeById(id));
  }
}
