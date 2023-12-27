import { Controller, Post, Body, Get, Param, Patch, Delete, Request as RequestNest, UseGuards, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateCommentReactionDto, UpdateCommentReactionDto } from '../dto/CommentReaction.dto';
import { LabelService } from '../service/Label.service';
import { handleResultSuccess } from 'src/helper/handleresult';
import { IAuthRequest } from 'src/types/auth.types';
import { AuthGuard } from 'src/Guards/auth.guard';

@Controller('label')
@ApiTags('Label')
@ApiBearerAuth('access-token')
export class LabelController {
    constructor(private readonly workspaceService: LabelService) { }
    @UseGuards(AuthGuard)
    @Post()
    async create(@Body() createWorkspaceDto: CreateCommentReactionDto, @RequestNest() request: IAuthRequest) {
        return handleResultSuccess(await this.workspaceService.createLabel(createWorkspaceDto, request?.user?.id));
    }

    @UseGuards(AuthGuard)
    @Get()
    async findByProject(@Query('projectId') projectId: string,  @RequestNest() request: IAuthRequest) {
        return handleResultSuccess(await this.workspaceService.findLabelByWorspaceIdAndProjectId(projectId, request.user.id));
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
