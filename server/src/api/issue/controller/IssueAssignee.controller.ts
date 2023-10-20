import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateCommentReactionDto, UpdateCommentReactionDto } from '../dto/CommentReaction.dto';
import { CommentReactionService } from '../service/CommentReaction.service';
import { IssueAssigneeService } from '../service/IssueAssignee.service';
import { CreateIssueAssigneeDto, UpdateIssueAssigneeDto } from '../dto/IssueAssignee.dto';

@Controller('issue-assignee')
@ApiTags('Issue Assignee')
export class IssueAssigneeController {
    constructor(private readonly workspaceService: IssueAssigneeService) { }
    @Post()
    create(@Body() createWorkspaceDto: CreateIssueAssigneeDto) {
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
    update(@Param('id') id: string, @Body() updateWorkspaceDto: UpdateIssueAssigneeDto) {
        return this.workspaceService.updateById(+id, updateWorkspaceDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.workspaceService.removeById(+id);
    }
}
