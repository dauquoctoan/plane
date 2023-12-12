import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateCommentReactionDto, UpdateCommentReactionDto } from '../dto/CommentReaction.dto';
import { CommentReactionService } from '../service/CommentReaction.service';
import { IssueAssigneeService } from '../service/IssueAssignee.service';
import { CreateIssueAssigneeDto, UpdateIssueAssigneeDto } from '../dto/IssueAssignee.dto';
import { handleResultSuccess } from 'src/helper/handleresult';

@Controller('issue-assignee')
@ApiTags('Issue Assignee')
export class IssueAssigneeController {
    constructor(private readonly workspaceService: IssueAssigneeService) { }
    @Post()
    create(@Body() createWorkspaceDto: CreateIssueAssigneeDto) {
        return handleResultSuccess(this.workspaceService.create(createWorkspaceDto));
    }

    @Get()
    findAll() {
        return handleResultSuccess(this.workspaceService.findAll());
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return handleResultSuccess(this.workspaceService.findOneById(id));
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateWorkspaceDto: UpdateIssueAssigneeDto) {
        return handleResultSuccess(this.workspaceService.updateById(id, updateWorkspaceDto));
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return handleResultSuccess(this.workspaceService.removeById(id));
    }
}
