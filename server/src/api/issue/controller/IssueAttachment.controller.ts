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
import { IssueAttachmentService } from '../service/IssueAttachment.service';
import {
  CreaetIssueAttachmentDto,
  UpdateIssueAttachmentDto,
} from '../dto/IssueAttachment.dto';
import { handleResultSuccess } from 'src/helper/handleresult';

@Controller('issue-attachment')
@ApiTags('Issue Attachment')
export class IssueAttachmentController {
  constructor(private readonly workspaceService: IssueAttachmentService) {}
  @Post()
  create(@Body() createWorkspaceDto: CreaetIssueAttachmentDto) {
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
  update(
    @Param('id') id: string,
    @Body() updateWorkspaceDto: UpdateIssueAttachmentDto,
  ) {
    return handleResultSuccess(
      this.workspaceService.updateById(id, updateWorkspaceDto),
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return handleResultSuccess(this.workspaceService.removeById(id));
  }
}
