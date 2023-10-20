import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { IssueCommentService } from '../service/IssueComment.service';
import { CreateIssueCommentDto, UpdateIssueCommentDto } from '../dto/IssueComment.dto';

@Controller('issue-comment')
@ApiTags('Issue Comment')
export class IssueCommentController {
    constructor(private readonly workspaceService: IssueCommentService) { }
    @Post()
    create(@Body() createWorkspaceDto: CreateIssueCommentDto) {
        return this.workspaceService.create(createWorkspaceDto);
    }

    @Get()
    findAll() {
        return this.workspaceService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.workspaceService.findOneById(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateWorkspaceDto: UpdateIssueCommentDto) {
        return this.workspaceService.updateById(+id, updateWorkspaceDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.workspaceService.removeById(+id);
    }
}
