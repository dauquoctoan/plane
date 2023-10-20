import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { InboxService } from '../service/inbox.service';
import { CreateInboxDto, UpdateInboxDto } from '../dto/inbox.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('Inbox')
export class InboxController {
    constructor(private readonly inboxService: InboxService) { }
    @Post()
    create(@Body() inbox: CreateInboxDto) {
        return this.inboxService.create(inbox);
    }

    @Get()
    findAll() {
        return this.inboxService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.inboxService.findOneById(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateWorkspaceDto: UpdateInboxDto) {
        return this.inboxService.updateById(+id, updateWorkspaceDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.inboxService.removeById(+id);
    }
}
