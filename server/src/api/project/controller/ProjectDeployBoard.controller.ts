import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProjectDeployBoardService } from '../service/ProjectDeployBoard.service';
import {
  CreateProjectDeployBoardDto,
  UpdateProjectDeployBoardDto,
} from '../dto/ProjectDeployBoard.dto';
import { handleResultSuccess } from 'src/helper/handleresult';

@Controller('project-deploy-board')
@ApiTags('Project Deploy Board')
export class ProjectDeployBoardController {
  constructor(private readonly workspaceService: ProjectDeployBoardService) {}
  @Post()
  create(@Body() project: CreateProjectDeployBoardDto) {
    return handleResultSuccess(this.workspaceService.create(project));
  }

  @Get()
  findAllProjectDeployBoard() {
    return handleResultSuccess(this.workspaceService.findAll());
  }

  @Get(':id')
  findOneProjectDeployBoard(@Param('id') id: string) {
    return handleResultSuccess(this.workspaceService.findOneById(id));
  }

  @Patch(':id')
  updateProjectDeployBoard(
    @Param('id') id: string,
    @Body() project: UpdateProjectDeployBoardDto,
  ) {
    return handleResultSuccess(this.workspaceService.updateById(id, project));
  }

  @Delete(':id')
  removeProjectDeployBoard(@Param('id') id?: string) {
    return handleResultSuccess(this.workspaceService.removeById(id));
  }
}
