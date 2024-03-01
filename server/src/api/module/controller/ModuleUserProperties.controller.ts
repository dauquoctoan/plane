import { Body, Controller, Get, Param, Patch, Request as RequestNest, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { handleResultSuccess } from 'src/helper/handleresult';
import { IAuthRequest } from 'src/types/auth.types';
import { AuthGuard } from 'src/Guards/auth.guard';
import { UpdateModuleUserPropertiesDto } from '../dto/ModuleUserProperties.dto';
import { ModuleUserPropertiesService } from '../service/ModuleUserProperties.service';

@Controller('module-user-properties')
@ApiTags('Cycle')
@ApiBearerAuth('access-token')
export class ModuleUserPropertiesController {
    constructor(private readonly cycleService: ModuleUserPropertiesService) { }

    @UseGuards(AuthGuard)
    @Get(':moduleId/project/:projectId')
    async findOne(@Param('projectId') projectId: string, @Param('moduleId') moduleId: string, @RequestNest() request: IAuthRequest) {
        const res = await this.cycleService.findOrCreate(projectId, moduleId, request.user.id)
        return handleResultSuccess(res[0].dataValues);
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() data: UpdateModuleUserPropertiesDto) {
        return handleResultSuccess(await this.cycleService.updateById(id, data));
    }
}