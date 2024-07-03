import {
  Controller,
  Get,
  Post,
  Body,
  Request as RequestNestjs,
  Param,
  Patch,
  Delete,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ProjectFavoriteService } from '../service/ProjectFavorite.service';
import {
  CreateProjectFavoriteDto,
  UpdateProjectFavoriteDto,
} from '../dto/ProjectFavorite.dto';
import { handleResultSuccess } from 'src/helper/handleresult';
import { IAuthRequest } from 'src/types/auth.types';
import { AuthGuard } from 'src/Guards/auth.guard';
import { ProjectService } from '../service/project.service';

@Controller('project-favorite')
@ApiTags('Project Favorite')
@ApiBearerAuth('access-token')
export class ProjectFavoriteController {
  constructor(
    private readonly projectFavoriteService: ProjectFavoriteService,
    private readonly projectService: ProjectService,
  ) {}

  @Post(':id')
  @UseGuards(AuthGuard)
  async create(
    @Param('id') projectId: string,
    @RequestNestjs() request: IAuthRequest,
  ) {
    return handleResultSuccess(
      await this.projectFavoriteService.createProjectFavorite(
        projectId,
        request.user.id,
      ),
    );
  }

  @Get()
  @UseGuards(AuthGuard)
  async findAllProjectFavorite(@RequestNestjs() request: IAuthRequest) {
    return handleResultSuccess(
      await this.projectService.getProjectFavorite(request?.user?.id),
    );
  }

  @Get(':id')
  findOneProjectFavorite(@Param('id') id: string) {
    return handleResultSuccess(this.projectFavoriteService.findOneById(id));
  }

  @Patch(':id')
  updateProjectFavorite(
    @Param('id') id: string,
    @Body() project: UpdateProjectFavoriteDto,
  ) {
    return handleResultSuccess(
      this.projectFavoriteService.updateById(id, project),
    );
  }

  @Delete(':id')
  async removeProjectFavorite(@Param('id') id?: string) {
    return handleResultSuccess(
      await this.projectFavoriteService.removeById(id),
    );
  }
}
