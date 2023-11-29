import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { IssueService } from '../service/issue.service';
import { CreateIssueDto, UpdateIssueDto } from '../dto/Issue.dto';
import { handleResultSuccess } from 'src/helper/handleresult';

@Controller('issue')
@ApiTags('Issue')
export class IssueController {
    constructor(private readonly workspaceService: IssueService) { }
    @Post()
    async create(@Body() createWorkspaceDto: CreateIssueDto) {
        return handleResultSuccess(await this.workspaceService.create(createWorkspaceDto));
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
    update(@Param('id') id: string, @Body() updateWorkspaceDto: UpdateIssueDto) {
        return handleResultSuccess(this.workspaceService.updateById(+id, updateWorkspaceDto));
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return handleResultSuccess(this.workspaceService.removeById(+id));
    }
}
