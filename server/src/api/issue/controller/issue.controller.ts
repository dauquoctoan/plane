import { Controller, Post, Body, Get, Param, Patch, Delete,Query, Request as RequestNest, UseGuards, Put } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { IssueService } from '../service/issue.service';
import { CreateIssueDto, QueryIssueDto, UpdateIssueDto } from '../dto/Issue.dto';
import { handleResultSuccess } from 'src/helper/handleresult';
import { IAuthRequest } from 'src/types/auth.types';
import { Issue } from '../entitys/Issue.entity';
import { AuthGuard } from 'src/Guards/auth.guard';

@Controller('issue')
@ApiTags('Issue')
@ApiBearerAuth('access-token')
export class IssueController {
    constructor(private readonly issueService: IssueService) { }

    @Post()
    @UseGuards(AuthGuard)
    async create(@Body() createWorkspaceDto: Issue, @RequestNest() request: IAuthRequest  ) {
        return handleResultSuccess(await this.issueService.createIssue(createWorkspaceDto, request.user.id));
    }

    @Get()
    @UseGuards(AuthGuard)
    async findAll(@Query() query: QueryIssueDto, @RequestNest() request: IAuthRequest) {
        return handleResultSuccess(await this.issueService.findIssues({...query, userId: request.user.id}))
    }


    @Put(':id')
    @UseGuards(AuthGuard)
    async update(@Body() issue: UpdateIssueDto, @Param('id') id:string) {
        return handleResultSuccess(await this.issueService.updateById(+id,issue))
    }
}
