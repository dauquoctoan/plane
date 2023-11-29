import { IIssue, ILabel, Istate } from '@/types';
import { BaseService } from './base-service';
import APP_CONFIG from '@/configs';

const { API_BASE_URL } = APP_CONFIG;

class IssueService extends BaseService {
    constructor() {
        super(API_BASE_URL);
    }

    async getState<T>(projectId: number) {
        return await this.get<T>('state/project/' + projectId);
    }

    async createState<T>(state: Partial<Istate>) {
        return await this.post<T>('state', state);
    }

    async createIssue<T>(issue: IIssue) {
        return await this.post<T>('issue', issue);
    }

    async createLabel<T>(label: Partial<ILabel>) {
        return await this.post<T>('label', label);
    }

    async findLabelsByProject<T>(projectId: string) {
        return await this.get<T>('label/by-project-id/' + projectId);
    }
}

const issueService = new IssueService();

export default issueService;
