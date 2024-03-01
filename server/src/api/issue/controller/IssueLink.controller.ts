import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { IssueLinkService } from '../service/IssueLink.service';
import { CreateIssueLinkDto, UpdateIssueLinkDto } from '../dto/IssueLink.dto';
import { handleResultSuccess } from 'src/helper/handleresult';

@Controller('issue-link')
@ApiTags('Issue Link')
export class IssueLinkController {
    constructor(private readonly workspaceService: IssueLinkService) { }
    @Post()
    async create(@Body() createWorkspaceDto: CreateIssueLinkDto) {
        return handleResultSuccess(await this.workspaceService.create(createWorkspaceDto));
    }

    @Get()
    async findAll() {
        return handleResultSuccess(await this.workspaceService.findAll());
    }

    @Get(':id')
    async findIssueLinkByIssue(@Param('id') id: string) {
        return handleResultSuccess(await this.workspaceService.findIssueLinkByIssueId(id));
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() updateWorkspaceDto: UpdateIssueLinkDto) {
        return handleResultSuccess(await this.workspaceService.updateById(id, updateWorkspaceDto));
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        return handleResultSuccess(await this.workspaceService.removeById(id));
    }
}
