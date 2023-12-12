import { Body, Controller, Delete, Get, Patch, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { IssueViewFavoriteService } from '../service/IssueViewFavorite.service';
import { CreateIssueViewFavoriteDto, UpdateIssueViewFavoriteDto } from '../dto/IssueViewFavorite.dto';
import { handleResultSuccess } from 'src/helper/handleresult';

@Controller('issue-view-favorite')
@ApiTags('Issue View Favorite')
export class IssueViewFavoriteController {
    constructor(private readonly issueViewFavorite: IssueViewFavoriteService) { }
    /* TeamMember */
    @Post()
    create(@Body() globalView: CreateIssueViewFavoriteDto) {
        return handleResultSuccess(this.issueViewFavorite.create(globalView));
    }

    @Get()
    findAll() {
        return handleResultSuccess(this.issueViewFavorite.findAll());
    }

    @Get(':id')
    findOne(@Query('id') id: string) {
        return handleResultSuccess(this.issueViewFavorite.findOneById(id));
    }

    @Patch(':id')
    update(@Query('id') id: string, @Body() globalView: UpdateIssueViewFavoriteDto) {
        return handleResultSuccess(this.issueViewFavorite.updateById(id, globalView));
    }

    @Delete(':id')
    remove(@Query("id") id?: string) {
        return handleResultSuccess(this.issueViewFavorite.removeById(id));
    }
}
