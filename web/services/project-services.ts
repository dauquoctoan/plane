import {
  ICycle,
  ICycleFavorite,
  ICycleUserProperties,
  IIssueViews,
  IModule,
  IModuleUserProperties,
  IPage,
  IProject,
  IProjectMember,
  IProjectViews,
} from '@/types';
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

  async getProjects(workspaceId: string) {
    try {
      return await this.get<IProject[]>('project/by-user/' + workspaceId);
    } catch (error) {
      console.log(error);
    }
  }

  async getMemberByProject<T>(query: { projectId: string }) {
    try {
      return await this.get<T>('project-member', query);
    } catch (error) {
      console.log(error);
    }
  }

  async getProjectViewByMember<T>(query: { projectId: string }) {
    try {
      return await this.get<T>('project-member/project-view', query);
    } catch (error) {
      console.log(error);
    }
  }

  async getMemberByProjectMe<T>(query: { projectId: string }) {
    try {
      return await this.get<T>('project-member/me', query);
    } catch (error) {
      console.log(error);
    }
  }

  /* cycle */
  async createCycle(projectId: string, cycle: Partial<ICycle>) {
    try {
      return await this.post<ICycle>('cycle/' + projectId, cycle);
    } catch (error) {
      console.log(error);
    }
  }

  async upDateCycle(cycleId: string, cycle: Partial<ICycle>) {
    try {
      return await this.patch<ICycle>('cycle/' + cycleId, cycle);
    } catch (error) {
      console.log(error);
    }
  }

  async deleteCycle(cycleId: string) {
    try {
      return await this.delete('cycle/' + cycleId);
    } catch (error) {
      console.log(error);
    }
  }

  async findAllCyclesByProject<T>(projectId: string, tab: String) {
    try {
      return await this.get<T>('cycle/' + projectId + '?type=' + tab);
    } catch (error) {
      console.log(error);
    }
  }

  async createCyclesFavorite(data: ICycleFavorite) {
    try {
      return await this.post<ICycleFavorite>('cycle-favorite', data);
    } catch (error) {
      console.log(error);
    }
  }

  async deleteCyclesFavorite(data: ICycleFavorite) {
    try {
      return await this.delete(
        `cycle-favorite?userId=${data.user_id}&cycleId=${data.cycle_id}`
      );
    } catch (error) {
      console.log(error);
    }
  }

  /* end cycle */
  async createModule(projectId: string, query: Partial<IModule>) {
    try {
      return await this.post<IModule>('module/' + projectId, query);
    } catch (error) {
      console.log(error);
    }
  }

  async updateModule(moduleId: string, module: Partial<IModule>) {
    try {
      return await this.patch<IModule>('module/' + moduleId, module);
    } catch (error) {
      console.log(error);
    }
  }

  async deleteModule(moduleId: string) {
    try {
      return await this.delete(`module/` + moduleId);
    } catch (error) {
      console.log(error);
    }
  }

  async findAllModulesByProject<T>(projectId: string) {
    try {
      return await this.get<T>('module/' + projectId);
    } catch (error) {
      console.log(error);
    }
  }

  async findOneProject(projectId: string) {
    try {
      return await this.get<IProject>('project/by-id/' + projectId);
    } catch (error) {
      console.log(error);
    }
  }

  async updateProject(projectId: string, data: IProject) {
    try {
      return await this.patch<IProject>('project/' + projectId, data);
    } catch (error) {
      console.log(error);
    }
  }

  async deleteProject<T>(projectId: string) {
    try {
      return await this.delete('project/' + projectId);
    } catch (error) {
      console.log(error);
    }
  }

  async joinProject<T>(data: { projectId: string }) {
    try {
      return await this.post<T>('project-member/join-project', data);
    } catch (error) {
      console.log(error);
    }
  }

  async updateProjectMember<T>(
    projectMemberId: string,
    data: Partial<IProjectMember>
  ) {
    try {
      return await this.patch<T>('project-member/' + projectMemberId, data);
    } catch (error) {
      console.log(error);
    }
  }

  async getCycleUserProperties(projectId: string, cycleId: string) {
    try {
      return await this.get<ICycleUserProperties>(
        'cycle-user-properties/' + cycleId + '/project/' + projectId
      );
    } catch (error) {
      console.log(error);
    }
  }

  async updateCycleUserProperties(
    cycleUserPropertiesId: string,
    data: Partial<ICycleUserProperties>
  ) {
    try {
      return await this.patch<ICycleUserProperties>(
        'cycle-user-properties/' + cycleUserPropertiesId,
        data
      );
    } catch (error) {
      console.log(error);
    }
  }

  async getModuleUserProperties(projectId: string, moduleId: string) {
    try {
      return await this.get<IModuleUserProperties>(
        'module-user-properties/' + moduleId + '/project/' + projectId
      );
    } catch (error) {
      console.log(error);
    }
  }

  async updateModuleUserProperties(
    cycleUserPropertiesId: string,
    data: Partial<IModuleUserProperties>
  ) {
    try {
      return await this.patch<IModuleUserProperties>(
        'cycle-user-properties/' + cycleUserPropertiesId,
        data
      );
    } catch (error) {
      console.log(error);
    }
  }

  //view
  async getProjectView(projectView: string) {
    try {
      return await this.get<IProjectViews[]>(
        'project-view?projectId=' + projectView
      );
    } catch (error) {
      console.log(error);
    }
  }

  async deleteProjectView(projectView: string) {
    try {
      return await this.delete('project-view/' + projectView);
    } catch (error) {
      console.log(error);
    }
  }

  async findOneProjectView(projectViewId: string) {
    try {
      return await this.get<IIssueViews>('project-view/' + projectViewId);
    } catch (error) {
      console.log(error);
    }
  }
  //page
  async createPage(page: Partial<IPage>) {
    try {
      return await this.post<IPage>('page', page);
    } catch (error) {
      console.log(error);
    }
  }

  async getPages(ProjectId: string) {
    try {
      return await this.get<IPage[]>('page?ProjectId=' + ProjectId);
    } catch (error) {
      console.log(error);
    }
  }

  async updatePages(page: Partial<IPage>) {
    try {
      return await this.patch<IPage>('page/' + page.id, page);
    } catch (error) {
      console.log(error);
    }
  }

  async deletePage(PageId: string) {
    try {
      return await this.delete('page/' + PageId);
    } catch (error) {
      console.log(error);
    }
  }

  async findOnePage(PageId: string) {
    try {
      return await this.get<IPage>('page/' + PageId);
    } catch (error) {
      console.log(error);
    }
  }

  //Project favorite

  async addProjectFavorite(projectId: string) {
    try {
      return await this.post<boolean>('project-favorite/' + projectId);
    } catch (error) {
      console.log(error);
    }
  }

  async removeProjectFavorite(projectId: string) {
    try {
      return await this.delete('project-favorite/' + projectId);
    } catch (error) {
      console.log(error);
    }
  }
}

const projectService = new ProjectService();

export default projectService;
