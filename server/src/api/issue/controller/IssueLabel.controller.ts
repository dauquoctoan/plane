import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateCommentReactionDto, UpdateCommentReactionDto } from '../dto/CommentReaction.dto';
import { CommentReactionService } from '../service/CommentReaction.service';
import { IssueLabelService } from '../service/IssueLabel.service';
import { CreateIssueLabelDto, UpdateIssueLabelDto } from '../dto/IssueLabel.dto';

@Controller('isssue-label')
@ApiTags('Issue Label')
export class IssueLabelController {
    constructor(private readonly workspaceService: IssueLabelService) { }
    @Post()
    create(@Body() createWorkspaceDto: CreateIssueLabelDto) {
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
    update(@Param('id') id: string, @Body() updateWorkspaceDto: UpdateIssueLabelDto) {
        return this.workspaceService.updateById(+id, updateWorkspaceDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.workspaceService.removeById(+id);
    }
}
