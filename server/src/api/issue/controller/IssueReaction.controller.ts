import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import {
  CreateCommentReactionDto,
  UpdateCommentReactionDto,
} from '../dto/CommentReaction.dto';
import { CommentReactionService } from '../service/CommentReaction.service';
import { handleResultSuccess } from 'src/helper/handleresult';
import { IssueReactionService } from '../service/IssueReaction.service';
import { CreateIssueReactionDto } from '../dto/IssueReaction.dto';

@Controller('issue-reaction')
@ApiTags('Issue Reaction')
export class IssueReactionController {
  constructor(private readonly workspaceService: IssueReactionService) {}
  @Post()
  async create(@Body() createWorkspaceDto: CreateIssueReactionDto) {
    return handleResultSuccess(
      await this.workspaceService.createAction(createWorkspaceDto),
    );
  }

  @Get()
  async findAll() {
    return handleResultSuccess(await this.workspaceService.findAll());
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return handleResultSuccess(await this.workspaceService.findActions(id));
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateWorkspaceDto: UpdateCommentReactionDto,
  ) {
    return handleResultSuccess(
      await this.workspaceService.updateById(id, updateWorkspaceDto),
    );
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return handleResultSuccess(await this.workspaceService.removeAction(id));
  }
}
