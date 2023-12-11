import { IIssue, ILabel, Istate } from '@/types';
import { BaseService } from './base-service';
import APP_CONFIG from '@/configs';

const { API_BASE_URL } = APP_CONFIG;

class IssueService extends BaseService {
    constructor() {
        super(API_BASE_URL);
    }

    async getState<T>(projectId: number) {
        try {
            return await this.get<T>('state/project/' + projectId);
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

    async findIssues<T>(query?:{idProject?:string, idMember?:string}){
        try {
            return await this.get<T>(`issue`,query);
        } catch (error) {
            console.log(error)
        }
    }

    async updateIssue<T>(idIssue?:number, issue?:IIssue){
        try {
            return await this.put<T>(`issue/${idIssue}`,issue);
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

    async findLabelsByProject<T>(projectId: string) {
        try {
            return await this.get<T>('label/by-project-id/' + projectId);
        } catch (error) {
            console.log(error)
        }
    }
}

const issueService = new IssueService();

export default issueService;
