import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { IssuePropertyService } from '../service/IssueProperty.service';
import { CreateIssuePropertyDto, UpdateIssuePropertyDto } from '../dto/IssueProperty.dto';
import { handleResultSuccess } from 'src/helper/handleresult';

@Controller('issue-property')
@ApiTags('Issue Property')
export class IssuePropertyController {
    constructor(private readonly workspaceService: IssuePropertyService) { }
    @Post()
    create(@Body() createWorkspaceDto: CreateIssuePropertyDto) {
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
    update(@Param('id') id: string, @Body() updateWorkspaceDto: UpdateIssuePropertyDto) {
        return handleResultSuccess(this.workspaceService.updateById(id, updateWorkspaceDto));
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return handleResultSuccess(this.workspaceService.removeById(id));
    }
}
