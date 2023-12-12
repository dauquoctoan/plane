import { Controller, Get, Post, Body, Patch, Delete, Param } from '@nestjs/common';
import { ApiTags } from "@nestjs/swagger";
import { WorkspaceThemeService } from '../service/WorkspaceTheme.service';
import { CreateWorkspaceThemeDto, UpdateWorkspaceThemeDto } from '../dto/WorkspaceTheme.dto';
import { handleResultSuccess } from 'src/helper/handleresult';


@Controller('workspaceMemberTheme')
@ApiTags('Workspace Member Theme')
export class WorkspaceThemeController {
    constructor(private readonly workspaceMemberThemeService: WorkspaceThemeService) { }
    @Post()
    createWorkspaceMemberTheme(@Body() createWorkspaceMemberThemeDto: CreateWorkspaceThemeDto) {
        return handleResultSuccess(this.workspaceMemberThemeService.create(createWorkspaceMemberThemeDto));
    }

    @Get()
    findAllWorkspaceMemberTheme() {
        return handleResultSuccess(this.workspaceMemberThemeService.findAll());
    }

    @Get(":id")
    findOneWorkspaceMemberTheme(@Param('id') id: string) {
        return handleResultSuccess(this.workspaceMemberThemeService.findOneById(id));
    }

    @Patch(":id")
    updateWorkspaceMemberTheme(@Param('id') id: string, @Body() updateWorkspaceMemberThemeDto: UpdateWorkspaceThemeDto) {
        return handleResultSuccess(this.workspaceMemberThemeService.updateById(id, updateWorkspaceMemberThemeDto));
    }

    @Delete(":id")
    removeWorkspaceMemberTheme(@Param('id') id: string) {
        return handleResultSuccess(this.workspaceMemberThemeService.removeById(id));
    }
}
