import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateCommentReactionDto, UpdateCommentReactionDto } from '../dto/CommentReaction.dto';
import { CommentReactionService } from '../service/CommentReaction.service';
import { IssueBlockerService } from '../service/IssueBlocker.service';
import { CreateIssueBlockerDto, UpdateIssueBlockerDto } from '../dto/IssueBlocker.dto';

@Controller('issue-blocker')
@ApiTags('Issue Blocker')
export class IssueBlockerController {
    constructor(private readonly workspaceService: IssueBlockerService) { }
    @Post()
    create(@Body() createWorkspaceDto: CreateIssueBlockerDto) {
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
    update(@Param('id') id: string, @Body() updateWorkspaceDto: UpdateIssueBlockerDto) {
        return this.workspaceService.updateById(+id, updateWorkspaceDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.workspaceService.removeById(+id);
    }
}
