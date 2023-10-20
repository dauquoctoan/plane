import { Controller, Get, Post, Body, Patch, Delete, Query, Param } from '@nestjs/common';
import { WorkspaceService } from '../service/workspace.service';
import { ApiTags } from "@nestjs/swagger";
import { CreateWorkspaceDto, UpdateWorkspaceDto } from '../dto/Workspace.dto';


@Controller()
@ApiTags('Workspace')
export class WorkspaceController {
  constructor(private readonly workspaceService: WorkspaceService) { }
  @Post()
  createWorkSpace(@Body() createWorkspaceDto: CreateWorkspaceDto) {
    return this.workspaceService.create(createWorkspaceDto);
  }

  @Get()
  findAllWorkSpace() {
    return this.workspaceService.findAll();
  }

  @Get(":id")
  findOneWorkSpace(@Param('id') id: string) {
    return this.workspaceService.findOneById(+id);
  }

  @Patch(":id")
  updateWorkSpace(@Param('id') id: string, @Body() updateWorkspaceDto: UpdateWorkspaceDto) {
    return this.workspaceService.updateById(+id, updateWorkspaceDto);
  }

  @Delete(":id")
  removeWorkSpace(@Param('id') id: string) {
    return this.workspaceService.removeById(+id);
  }
}
