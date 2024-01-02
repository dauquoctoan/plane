import { IProject, IWorkspace } from '@/types';
import { BaseService } from './base-service';
import APP_CONFIG from '@/configs';

const { API_BASE_URL } = APP_CONFIG;

class ProjectService extends BaseService {
    constructor() {
        super(API_BASE_URL);
    }

    async createProject<T>(project: IProject) {
        return await this.post<T>('project', project);
    }

    async getProjects<T>(workspaceId: string) {
        try {
            return await this.get<T>('project/by-user/' + workspaceId);
        } catch (error) {
            console.log(error)
        }
    }

    async getMemberByProject<T>(query: { projectId: string }) {
        try {
            return await this.get<T>('project-member', query)
        } catch (error) {
            console.log(error)
        }
    }

    async getMemberByProjectMe<T>(query: { projectId: string }) {
        try {
            return await this.get<T>('project-member/me', query)
        } catch (error) {
            console.log(error)
        }
    }
}

const projectService = new ProjectService();

export default projectService;
