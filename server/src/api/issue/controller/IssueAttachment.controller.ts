import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateCommentReactionDto, UpdateCommentReactionDto } from '../dto/CommentReaction.dto';
import { CommentReactionService } from '../service/CommentReaction.service';
import { IssueAttachmentService } from '../service/IssueAttachment.service';
import { CreaetIssueAttachmentDto, UpdateIssueAttachmentDto } from '../dto/IssueAttachment.dto';

@Controller('issue-attachment')
@ApiTags('Issue Attachment')
export class IssueAttachmentController {
    constructor(private readonly workspaceService: IssueAttachmentService) { }
    @Post()
    create(@Body() createWorkspaceDto: CreaetIssueAttachmentDto) {
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
    update(@Param('id') id: string, @Body() updateWorkspaceDto: UpdateIssueAttachmentDto) {
        return this.workspaceService.updateById(+id, updateWorkspaceDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.workspaceService.removeById(+id);
    }
}
