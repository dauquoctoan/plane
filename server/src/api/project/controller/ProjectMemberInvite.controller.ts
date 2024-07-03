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
import { ProjectMemberInviteService } from '../service/ProjectMemberInvite.service';
import {
  CreateProjectMemberInviteDto,
  UpdateProjectMemberInviteDto,
} from '../dto/ProjectMemberInvite.dto';
import { handleResultSuccess } from 'src/helper/handleresult';

@Controller('project-member-invite')
@ApiTags('Project Member Invite')
export class ProjectMemberInviteController {
  constructor(
    private readonly projectMemberInviteService: ProjectMemberInviteService,
  ) {}
  @Post()
  create(@Body() project: CreateProjectMemberInviteDto) {
    return handleResultSuccess(this.projectMemberInviteService.create(project));
  }

  @Get()
  findAllprojectMemberInvite() {
    return handleResultSuccess(this.projectMemberInviteService.findAll());
  }

  @Get(':id')
  findOneprojectMemberInvite(@Param('id') id: string) {
    return handleResultSuccess(this.projectMemberInviteService.findOneById(id));
  }

  @Patch(':id')
  updateprojectMemberInvite(
    @Param('id') id: string,
    @Body() project: UpdateProjectMemberInviteDto,
  ) {
    return handleResultSuccess(
      this.projectMemberInviteService.updateById(id, project),
    );
  }

  @Delete(':id')
  removeprojectMemberInvite(@Param('id') id?: string) {
    return handleResultSuccess(this.projectMemberInviteService.removeById(id));
  }
}
