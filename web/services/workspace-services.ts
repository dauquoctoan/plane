import { IWorkspace, IWorkspaceMemberInvite } from '@/types';
import { BaseService } from './base-service';
import APP_CONFIG from '@/configs';

const { API_BASE_URL } = APP_CONFIG;

class WorkSpaceService extends BaseService {
    constructor() {
        super(API_BASE_URL);
    }

    createWorkSpace<T>(workspace: IWorkspace) {
        return this.post<T>('api/work-space', workspace);
    }

    createsWorkspaceMemberInvite<T>(workspaces: IWorkspaceMemberInvite[]) {
        return this.post<T>('api/work-space/workspaceMemberInvite/creates', workspaces);
    }
}

const workspaceService = new WorkSpaceService();

export default workspaceService;
