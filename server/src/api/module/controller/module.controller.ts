import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
  UseGuards,
  Request as RequestNest,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateModuleDto, UpdateModuleDto } from '../dto/Module.dto';
import { ModuleService } from '../service/Module.service';
import { handleResultSuccess } from 'src/helper/handleresult';
import { AuthGuard } from 'src/Guards/auth.guard';
import { IAuthRequest } from 'src/types/auth.types';

@Controller('module')
@ApiTags('Module')
@ApiBearerAuth('access-token')
export class ModuleController {
  constructor(private readonly moduleService: ModuleService) {}
  @Post(':id')
  @UseGuards(AuthGuard)
  async create(
    @Body() module: CreateModuleDto,
    @Param('id') projectId: string,
    @RequestNest() request: IAuthRequest,
  ) {
    return handleResultSuccess(
      await this.moduleService.createModule(projectId, request.user.id, module),
    );
  }

  @Get()
  findAll() {
    return handleResultSuccess(this.moduleService.findAll());
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string, @RequestNest() request: IAuthRequest) {
    return handleResultSuccess(
      await this.moduleService.findModulesProject(id, request.user.id),
    );
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() module: UpdateModuleDto) {
    return handleResultSuccess(await this.moduleService.updateById(id, module));
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return handleResultSuccess(this.moduleService.removeById(id));
  }
}
