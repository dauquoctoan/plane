import { Body, Controller, Delete, Get, Patch, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { IssueViewService } from '../service/IssueView.service';
import { CreateIssueViewDto, UpdateIssueViewDto } from '../dto/IssueView.entity.dto';


@Controller('issue-view')
@ApiTags('Issue View')
export class IssueViewController {
    constructor(private readonly issueView: IssueViewService) { }
    /* TeamMember */
    @Post()
    create(@Body() globalView: CreateIssueViewDto) {
        return this.issueView.create(globalView);
    }

    @Get()
    findAll() {
        return this.issueView.findAll();
    }

    @Get(':id')
    findOne(@Query('id') id: string) {
        return this.issueView.findOneById(+id);
    }

    @Patch(':id')
    update(@Query('id') id: string, @Body() globalView: UpdateIssueViewDto) {
        return this.issueView.updateById(+id, globalView);
    }

    @Delete(':id')
    remove(@Query("id") id?: string) {
        return this.issueView.removeById(+id);
    }
}
