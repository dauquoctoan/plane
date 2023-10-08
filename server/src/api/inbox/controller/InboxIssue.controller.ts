import { ApiTags } from '@nestjs/swagger';
import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { InboxIssueService } from '../service/InboxIssue.service';
import { CreateInboxIssueDto, UpdateInboxIssueDto } from '../dto/InboxIssue.dto';


@Controller('inbox-issue')
@ApiTags('Input Issue')
export class InboxIssueController {
    constructor(private readonly inboxIssueService: InboxIssueService) { }
    @Post()
    create(@Body() inbox: CreateInboxIssueDto) {
        return this.inboxIssueService.create(inbox);
    }

    @Get()
    findAll() {
        return this.inboxIssueService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.inboxIssueService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateWorkspaceDto: UpdateInboxIssueDto) {
        return this.inboxIssueService.updateById(+id, updateWorkspaceDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.inboxIssueService.removeById(+id);
    }
}
