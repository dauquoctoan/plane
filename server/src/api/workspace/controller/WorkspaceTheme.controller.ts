import { Controller, Get, Post, Body, Patch, Delete, Param } from '@nestjs/common';
import { ApiTags } from "@nestjs/swagger";
import { WorkspaceThemeService } from '../service/WorkspaceTheme.service';
import { CreateWorkspaceThemeDto, UpdateWorkspaceThemeDto } from '../dto/WorkspaceTheme.dto';


@Controller('workspaceMemberTheme')
@ApiTags('WorkspaceMemberTheme')
export class WorkspaceThemeController {
    constructor(private readonly workspaceMemberThemeService: WorkspaceThemeService) { }
    @Post()
    createWorkspaceMemberTheme(@Body() createWorkspaceMemberThemeDto: CreateWorkspaceThemeDto) {
        return this.workspaceMemberThemeService.create(createWorkspaceMemberThemeDto);
    }

    @Get()
    findAllWorkspaceMemberTheme() {
        return this.workspaceMemberThemeService.findAll();
    }

    @Get(":id")
    findOneWorkspaceMemberTheme(@Param('id') id: string) {
        return this.workspaceMemberThemeService.findOneById(+id);
    }

    @Patch(":id")
    updateWorkspaceMemberTheme(@Param('id') id: string, @Body() updateWorkspaceMemberThemeDto: UpdateWorkspaceThemeDto) {
        return this.workspaceMemberThemeService.updateById(+id, updateWorkspaceMemberThemeDto);
    }

    @Delete(":id")
    removeWorkspaceMemberTheme(@Param('id') id: string) {
        return this.workspaceMemberThemeService.removeById(+id);
    }
}
