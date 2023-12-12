import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateCommentReactionDto, UpdateCommentReactionDto } from '../dto/CommentReaction.dto';
import { CommentReactionService } from '../service/CommentReaction.service';
import { IssueVoteService } from '../service/IssueVote.service';
import { handleResultSuccess } from 'src/helper/handleresult';

@Controller('issue-vote')
@ApiTags('Issue Vote')
export class IssueVoteController {
    constructor(private readonly workspaceService: IssueVoteService) { }
    @Post()
    create(@Body() createWorkspaceDto: CreateCommentReactionDto) {
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
    update(@Param('id') id: string, @Body() updateWorkspaceDto: UpdateCommentReactionDto) {
        return handleResultSuccess(this.workspaceService.updateById(id, updateWorkspaceDto));
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return handleResultSuccess(this.workspaceService.removeById(id));
    }
}
