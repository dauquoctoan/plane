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
    create(@Body() createWorkspaceDto: CreateIssueLinkDto) {
        return handleResultSuccess(this.workspaceService.create(createWorkspaceDto));
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
    update(@Param('id') id: string, @Body() updateWorkspaceDto: UpdateIssueLinkDto) {
        return handleResultSuccess(this.workspaceService.updateById(+id, updateWorkspaceDto));
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return handleResultSuccess(this.workspaceService.removeById(+id));
    }
}
