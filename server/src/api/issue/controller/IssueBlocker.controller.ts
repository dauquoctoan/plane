import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { IssueBlockerService } from '../service/IssueBlocker.service';
import { CreateIssueBlockerDto, UpdateIssueBlockerDto } from '../dto/IssueBlocker.dto';
import { handleResultSuccess } from 'src/helper/handleresult';

@Controller('issue-blocker')
@ApiTags('Issue Blocker')
export class IssueBlockerController {
    constructor(private readonly workspaceService: IssueBlockerService) { }
    @Post()
    create(@Body() createWorkspaceDto: CreateIssueBlockerDto) {
        return handleResultSuccess(this.workspaceService.create(createWorkspaceDto));
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
    update(@Param('id') id: string, @Body() updateWorkspaceDto: UpdateIssueBlockerDto) {
        return handleResultSuccess(this.workspaceService.updateById(id, updateWorkspaceDto));
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return handleResultSuccess(this.workspaceService.removeById(id));
    }
}
