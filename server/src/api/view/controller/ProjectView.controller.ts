import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Request as RequestNest,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { handleResultSuccess } from 'src/helper/handleresult';
import { IAuthRequest } from 'src/types/auth.types';
import { AuthGuard } from 'src/Guards/auth.guard';
import { ProjectViewService } from '../service/ProjectView.service';
import {
  CreateProjectViewDto,
  UpdateProjectViewDto,
} from '../dto/ProjectView.dto';

@Controller('project-view')
@ApiTags('Project View')
@ApiBearerAuth('access-token')
export class ProjectViewController {
  constructor(private readonly projectView: ProjectViewService) {}
  @Post()
  @UseGuards(AuthGuard)
  async create(
    @Body() projectView: CreateProjectViewDto,
    @RequestNest() request: IAuthRequest,
  ) {
    return handleResultSuccess(
      await this.projectView.createProjectViews({
        ...projectView,
        created_at: request.user.id,
      }),
    );
  }

  @Get()
  @UseGuards(AuthGuard)
  async findAll(
    @RequestNest() request: IAuthRequest,
    @Query('projectId') projectId: string,
  ) {
    return handleResultSuccess(
      await this.projectView.findAllProjectView(request.user.id, projectId),
    );
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  async findOne(@Param('id') id: string) {
    return handleResultSuccess(await this.projectView.findOneById(id));
  }

  @Patch(':id')
  async update(
    @Query('id') id: string,
    @Body() projectView: UpdateProjectViewDto,
  ) {
    return handleResultSuccess(
      await this.projectView.updateById(id, projectView),
    );
  }

  @Delete(':id')
  async remove(@Param('id') id?: string) {
    return handleResultSuccess(await this.projectView.removeById(id));
  }
}
