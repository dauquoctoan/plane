import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Request as RequestNest,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { IssueViewService } from '../service/IssueView.service';
import { CreateIssueViewDto, UpdateIssueViewDto } from '../dto/IssueView.dto';
import { handleResultSuccess } from 'src/helper/handleresult';
import { IAuthRequest } from 'src/types/auth.types';
import { AuthGuard } from 'src/Guards/auth.guard';

@Controller('issue-view')
@ApiTags('Issue View')
@ApiBearerAuth('access-token')
export class IssueViewController {
  constructor(private readonly issueView: IssueViewService) {}
  /* TeamMember */
  @Post()
  @UseGuards(AuthGuard)
  async create(
    @Body() issueView: CreateIssueViewDto,
    @RequestNest() request: IAuthRequest,
  ) {
    return handleResultSuccess(
      await this.issueView.createIssueViews({
        ...issueView,
        created_at: request.user.id,
      }),
    );
  }

  @Get()
  @UseGuards(AuthGuard)
  async findAll(@RequestNest() request: IAuthRequest) {
    return handleResultSuccess(
      await this.issueView.findAllIssueView(request.user.id),
    );
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  async findOne(@Param('id') id: string) {
    return handleResultSuccess(await this.issueView.findOneById(id));
  }

  @Patch(':id')
  async update(@Query('id') id: string, @Body() issueView: UpdateIssueViewDto) {
    return handleResultSuccess(await this.issueView.updateById(id, issueView));
  }

  @Delete(':id')
  async remove(@Query('id') id?: string) {
    return handleResultSuccess(await this.issueView.removeById(id));
  }
}
