import { IIssue, IProject, IWorkspace } from '@/types';
import { BaseService } from './base-service';
import APP_CONFIG from '@/configs';

const { API_BASE_URL } = APP_CONFIG;

export interface IOverViewDashborad{
    issueAssignee: number;
    issueCreated: number;
    issueCompleted: number;
    issueOverdue: number;
}

export interface IAnalyticsOverview{
    issueAssignedByState:{
        group: string;
        color:string;
        total: number;
    } [];

    issuePendingByMember:  {
        last_name: string;
        first_name: string;
        email: string;
        id: string;
        total: number;
    }[];

    topIssueCreated: {
        last_name: string;
        first_name: string;
        email: string;
        total: number
    }[];

    topIssueClosed: {
        last_name: string,
        first_name: string,
        email: string,
        id: string,
        total: number
    }[];

    chartIssueClosedByMonth:{
        month: number;
        total: number;
    }[]
}


class OverviewService extends BaseService {
    constructor() {
        super(API_BASE_URL);
    }

    async getDashboardOverview() {
        try {
            return await this.get<IOverViewDashborad>('analytic/dashboard-overview');
        } catch (error) {
            console.log(error)
        }
    }

    async getAssignedByState(type: 'week'|'month'|'today'|'year'|'all') {
        try {
            return await this.get<{group:string,total:string}[]>('analytic/dashboard-assigned-by-state?type='+type);
        } catch (error) {
            console.log(error)
        }
    }

    async getAssignedByPriority(type: 'week'|'month'|'today'|'year'|'all') {
        try {
            return await this.get<{priority:string,total:string}[]>('analytic/dashboard-assigned-by-priority?type='+type);
        } catch (error) {
            console.log(error)
        }
    }

    async getAnalyticsOverview() {
        try {
            return await this.get<IAnalyticsOverview>('analytic/overview');
        } catch (error) {
            console.log(error)
        }
    }

    async search(search:string) {
        try {
            return await this.get<{
                issues: IIssue[],
                workspaces: IWorkspace[],
                projects: IProject[]

            }>('search?search='+search);
        } catch (error) {
            console.log(error)
        }
    }
}

const overviewService = new OverviewService();

export default overviewService;
