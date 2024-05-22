import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Request, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiCookieAuth, ApiQuery, ApiTags } from '@nestjs/swagger';
import { AnalyticViewService } from '../service/analytic.service';
import { CreateAnalyticViewDto, UpdateAnalyticViewDto } from '../dto/AnalyticView.dto';
import { handleResultSuccess } from 'src/helper/handleresult';
import { IssueService } from 'src/api/issue/service/issue.service';
import { IAuthRequest } from 'src/types/auth.types';
import { AuthGuard } from 'src/Guards/auth.guard';
import { StateService } from 'src/api/state/service/state.service';
import { TtypeDate, TypeDate } from 'src/types/date.types';

@Controller('analytic')
@ApiBearerAuth('access-token')
@ApiTags('Analytic')
export class AnalyticViewController {
    constructor(
        private readonly analyticViewService: AnalyticViewService, 
        private readonly issueService: IssueService,
        private readonly stateService: StateService,
    ) { }
    @Post()
    create(@Body() analytic: CreateAnalyticViewDto) {
        return handleResultSuccess(this.analyticViewService.create(analytic))
    }

    @Get('dashboard-overview')
    @UseGuards(AuthGuard)
    async findOverView(@Request() request: IAuthRequest) {
        return handleResultSuccess(await this.issueService.getOverView(request?.user?.id));
    }

    @Get('dashboard-assigned-by-state')
    @ApiQuery({ name: 'type', enum:TypeDate, required:false})
    @UseGuards(AuthGuard)
    async dashboardAssignedByState(@Request() request: IAuthRequest, @Query('type') typeDate:TtypeDate ) {
        return handleResultSuccess(await this.stateService.assignedByState(request?.user?.id, typeDate));
    }   

    @Get('overview')
    @UseGuards(AuthGuard)
    async oveView(@Request() request: IAuthRequest) {
        return handleResultSuccess(await this.issueService.overviewAnalytics(request.user.id))
    }
    
    @Get('analytics-issue-pending-by-assigned')
    @UseGuards(AuthGuard)
    async analyticsIssueByAssigned(@Request() request: IAuthRequest ) {
        return handleResultSuccess(await this.issueService.issuePendingByMember(request?.user?.id));
    }

    @Get('analytics-top-issue-created')
    @UseGuards(AuthGuard)
    async analyticstopIssueCreated(@Request() request: IAuthRequest ) {
        return handleResultSuccess(await this.issueService.topIssueCreated(request?.user?.id));
    }

    @Get('analytics-top-issue-closed')
    @UseGuards(AuthGuard)
    async analyticstopIssueClosed(@Request() request: IAuthRequest ) {
        return handleResultSuccess(await this.issueService.topIssueClosed(request?.user?.id));
    }

    @Get('analytics-issue-by-month')
    @UseGuards(AuthGuard)
    async chartIssueClosedByMonth(@Request() request: IAuthRequest ) {
        return handleResultSuccess(await this.issueService.chartIssueClosedByMonth(request?.user?.id));
    }
    

    @Get('dashboard-assigned-by-priority')
    @ApiQuery({ name: 'type', enum:TypeDate, required:false})
    @UseGuards(AuthGuard)
    async dashboardAssignedByPriority(@Request() request: IAuthRequest, @Query('type') typeDate:TtypeDate ) {
        return handleResultSuccess(await this.issueService.assignedByPriority(request?.user?.id, typeDate));
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return handleResultSuccess(this.analyticViewService.findOneById(id));
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() analytic: UpdateAnalyticViewDto) {
        return handleResultSuccess(this.analyticViewService.updateById(id, analytic));
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return handleResultSuccess(this.analyticViewService.removeById(id));
    }
}
