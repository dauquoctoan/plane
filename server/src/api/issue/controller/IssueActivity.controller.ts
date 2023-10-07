import { Controller } from '@nestjs/common';

@Controller('social-connection')
export class SocialConnectionController { }
import { Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { IssueActivityService } from '../service/IssueActivity.service';
import { CreateIssueActivityDto, UpdateIssueActivityDto } from '../dto/IssueActivity.dto';

@Controller('issue-activity')
@ApiTags('Issue Activity')
export class IssueActivityController {
    constructor(private readonly workspaceService: IssueActivityService) { }
    @Post()
    create(@Body() createWorkspaceDto: CreateIssueActivityDto) {
        return this.workspaceService.create(createWorkspaceDto);
    }

    @Get()
    findAll() {
        return this.workspaceService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.workspaceService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateWorkspaceDto: UpdateIssueActivityDto) {
        return this.workspaceService.updateById(+id, updateWorkspaceDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.workspaceService.removeById(+id);
    }
}
