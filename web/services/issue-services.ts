import { IFillterIssue, IIssue, IIssueViews, ILabel, Istate } from '@/types';
import { BaseService } from './base-service';
import APP_CONFIG from '@/configs';

const { API_BASE_URL } = APP_CONFIG;

class IssueService extends BaseService {
    constructor() {
        super(API_BASE_URL);
    }

    async getState<T>(projectId: string) {
        try {
            return await this.get<T>('state/project/' + projectId);
        } catch (error) {
            console.log(error)
        }
    }

    async getDefaultState<T>() {
        try {
            return await this.get<T>('state/default');
        } catch (error) {
            console.log(error)
        }
    }

    async updateIssueAssign<T>(idIssue:string, assignees: string[]){
        try {
            return await this.patch<T>('issue-assignee/' + idIssue, {assignees:assignees})
        } catch (error) {
            console.log(error)
        }
    }

    async createState<T>(state: Partial<Istate>) {
        try {
            return await this.post<T>('state', state);
        } catch (error) {
            console.log(error)
        }
    }

    async createIssue<T>(issue: IIssue) {
        try {
            return await this.post<T>('issue', issue);
        } catch (error) {
            console.log(error)
        }
    } 

    async findIssues<T>(query?: IFillterIssue){
        try {
            return await this.post<T>(`issue/fillter`, query);
        } catch (error) {
            console.log(error)
        }
    }

    async updateIssue<T>(idIssue?:string, issue?:IIssue){
        try {
            return await this.patch<T>(`issue/${idIssue}`,issue);
        } catch (error) {
            console.log(error)
        }
    }

    async createLabel<T>(label: Partial<ILabel>) {
        try {
            return await this.post<T>('label', label);
        } catch (error) {
            console.log(error)
        }
    }

    async updateIssueLabel<T>(labels:string[], issueId:string ) {
        try {
            return await this.patch<T>('isssue-label/' + issueId, {labels});
        } catch (error) {
            console.log(error)
        }
    }

    async findLabelsByProject<T>(projectId: string) {
        try {
            return await this.get<T>('label/by-project-id/' + projectId);
        } catch (error) {
            console.log(error)
        }
    }

    async createIssueView<T>(issueView: IIssueViews){
        try {
            return await this.post<T>('issue-view', issueView)
        } catch (error) {
            console.log(error)
        }
    }

    async getIssueView<T>(){
        try {
            return await this.get<T>('issue-view')
        } catch (error) {
            console.log(error)
        }
    }

    async test(a:any){
        try {
            return await this.post('test', a)
        } catch (error) {
            console.log( error)
        }
    }
}

const issueService = new IssueService();

export default issueService;
