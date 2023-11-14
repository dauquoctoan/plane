import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { IssueCommentService } from '../service/IssueComment.service';
import { CreateIssueCommentDto, UpdateIssueCommentDto } from '../dto/IssueComment.dto';
import { handleResultSuccess } from 'src/helper/handleresult';

@Controller('issue-comment')
@ApiTags('Issue Comment')
export class IssueCommentController {
    constructor(private readonly workspaceService: IssueCommentService) { }
    @Post()
    create(@Body() createWorkspaceDto: CreateIssueCommentDto) {
        return handleResultSuccess(this.workspaceService.create(createWorkspaceDto));
    }

    @Get()
    findAll() {
        return handleResultSuccess(this.workspaceService.findAll());
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return handleResultSuccess(this.workspaceService.findOneById(+id));
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateWorkspaceDto: UpdateIssueCommentDto) {
        return handleResultSuccess(this.workspaceService.updateById(+id, updateWorkspaceDto));
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return handleResultSuccess(this.workspaceService.removeById(+id));
    }
}
