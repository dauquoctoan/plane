import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Query,
  Request as RequestNest,
  UseGuards,
  Put,
  Delete,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { IssueService } from '../service/issue.service';
import {
  CreateIssueDto,
  QueryIssueDto,
  UpdateIssueDto,
} from '../dto/Issue.dto';
import { handleResultSuccess } from 'src/helper/handleresult';
import { IAuthRequest } from 'src/types/auth.types';
import { AuthGuard } from 'src/Guards/auth.guard';
import { removeKeyEmpTyToNull } from 'src/helper/key';

@Controller('issue')
@ApiTags('Issue')
@ApiBearerAuth('access-token')
export class IssueController {
  constructor(private readonly issueService: IssueService) {}

  @Post()
  @UseGuards(AuthGuard)
  async create(
    @Body() createWorkspaceDto: CreateIssueDto,
    @RequestNest() request: IAuthRequest,
  ) {
    return handleResultSuccess(
      await this.issueService.createIssue(createWorkspaceDto, request.user.id),
    );
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  async findAll(
    @Param('id') projectid: string,
    @RequestNest() request: IAuthRequest,
  ) {
    return handleResultSuccess(
      await this.issueService.getIssueByProjectId(projectid, request.user.id),
    );
  }

  @Post('/fillter')
  @UseGuards(AuthGuard)
  async fillterIssue(
    @Body() body: QueryIssueDto,
    @RequestNest() request: IAuthRequest,
  ) {
    return handleResultSuccess(
      await this.issueService.fillterIssue({
        ...body,
        userId: request.user.id,
      }),
    );
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  async update(@Body() issue: UpdateIssueDto, @Param('id') id: string) {
    const result = await this.issueService.updateById(
      id,
      removeKeyEmpTyToNull(issue),
    );
    return handleResultSuccess(result[0]);
  }

  @Delete(':id')
  // @UseGuards(AuthGuard)
  async delete(@Param('id') id: string) {
    return handleResultSuccess(await this.issueService.removeById(id));
  }
}
