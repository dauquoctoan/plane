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

    async getProjects<T>(workspaceId: number) {
        const result = await this.get<T>('project/by-user/' + workspaceId);
        return result
    }
}

const projectService = new ProjectService();

export default projectService;