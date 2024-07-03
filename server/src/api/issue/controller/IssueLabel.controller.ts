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
import { IssueLabelService } from '../service/IssueLabel.service';
import {
  CreateIssueLabelDto,
  UpdateIssueLabelDto,
} from '../dto/IssueLabel.dto';
import { handleResultSuccess } from 'src/helper/handleresult';

@Controller('isssue-label')
@ApiTags('Issue Label')
export class IssueLabelController {
  constructor(private readonly workspaceService: IssueLabelService) {}
  @Post()
  create(@Body() createWorkspaceDto: CreateIssueLabelDto) {
    return handleResultSuccess(
      this.workspaceService.create(createWorkspaceDto),
    );
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
  async update(
    @Param('id') id: string,
    @Body() updateWorkspaceDto: UpdateIssueLabelDto,
  ) {
    return handleResultSuccess(
      await this.workspaceService.changeIssueLabel(
        updateWorkspaceDto.labels || [],
        id,
      ),
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return handleResultSuccess(this.workspaceService.removeById(id));
  }
}
