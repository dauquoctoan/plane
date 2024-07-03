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
import { IssueAssigneeService } from '../service/IssueAssignee.service';
import {
  CreateIssueAssigneeDto,
  UpdateIssueAssigneeDto,
} from '../dto/IssueAssignee.dto';
import { handleResultSuccess } from 'src/helper/handleresult';

@Controller('issue-assignee')
@ApiTags('Issue Assignee')
export class IssueAssigneeController {
  constructor(private readonly issueAssignee: IssueAssigneeService) {}
  @Post()
  async create(@Body() createWorkspaceDto: CreateIssueAssigneeDto) {
    return handleResultSuccess(
      await this.issueAssignee.create(createWorkspaceDto),
    );
  }

  @Get()
  async findAll() {
    return handleResultSuccess(await this.issueAssignee.findAll());
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return handleResultSuccess(this.issueAssignee.findOneById(id));
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateWorkspaceDto: UpdateIssueAssigneeDto,
  ) {
    return handleResultSuccess(
      await this.issueAssignee.changeIssueAsign(
        updateWorkspaceDto.assignees || [],
        id,
      ),
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return handleResultSuccess(this.issueAssignee.removeById(id));
  }
}
