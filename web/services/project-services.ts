import { IProject, IWorkspace } from '@/types';
import { BaseService } from './base-service';
import APP_CONFIG from '@/configs';

const { API_BASE_URL } = APP_CONFIG;

class ProjectService extends BaseService {
    constructor() {
        super(API_BASE_URL);
    }

    async createProject<T>(project: IProject) {
        return await this.post<T>('api/project', project);
    }

    async getProjects<T>() {
        const result = await this.get<T>('api/project/by-user');
        return result
    }
}

const projectService = new ProjectService();

export default projectService;
