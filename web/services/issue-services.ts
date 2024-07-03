import {
  IFillterIssue,
  IIssue,
  IIssueViews,
  IIsueLink,
  IIsueReaction,
  ILabel,
  Istate,
} from '@/types';
import { BaseService } from './base-service';
import APP_CONFIG from '@/configs';
import { IMoreForm } from '@/components/module/createIssue';

const { API_BASE_URL } = APP_CONFIG;

class IssueService extends BaseService {
  constructor() {
    super(API_BASE_URL);
  }

  async getState(projectId: string, isUser?: boolean) {
    try {
      return await this.get<Istate[]>(
        'state/project/' + projectId + '?isUser=' + isUser || ''
      );
    } catch (error) {
      console.log(error);
    }
  }

  async getDefaultState() {
    try {
      return await this.get<Istate[]>('state/default');
    } catch (error) {
      console.log(error);
    }
  }

  async updateIssueAssign<T>(idIssue: string, assignees: string[]) {
    try {
      return await this.patch<T>('issue-assignee/' + idIssue, {
        assignees: assignees,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async createState<T>(state: Partial<Istate>) {
    try {
      return await this.post<T>('state', state);
    } catch (error) {
      console.log(error);
    }
  }

  async deleteState(stateId: string) {
    try {
      return await this.delete('state/' + stateId);
    } catch (error) {
      console.log(error);
    }
  }

  async createIssue<T>(issue: Partial<IIssue> & IMoreForm) {
    try {
      return await this.post<T>('issue', issue);
    } catch (error) {
      console.log(error);
    }
  }

  async findIssues(query?: IFillterIssue) {
    try {
      return await this.post<IIssue[]>(`issue/fillter`, query);
    } catch (error) {
      console.log(error);
    }
  }

  async deleteIssue(issueId: string) {
    try {
      return await this.delete('issue/' + issueId);
    } catch (error) {
      console.log(error);
    }
  }

  async findIssueByProjectId<T>(projectId: string) {
    try {
      return await this.get<T>('issue/' + projectId);
    } catch (error) {
      console.log(error);
    }
  }

  async updateIssue<T>(idIssue?: string, issue?: Partial<IIssue>) {
    try {
      return await this.patch<T>(`issue/${idIssue}`, issue);
    } catch (error) {
      console.log(error);
    }
  }

  async createLabel<T>(label: Partial<ILabel>) {
    try {
      return await this.post<T>('label', label);
    } catch (error) {
      console.log(error);
    }
  }

  async updateLabel<T>(label: Partial<ILabel>, labelId: string) {
    try {
      return await this.patch<T>(`label/${labelId}`, label);
    } catch (error) {
      console.log(error);
    }
  }

  async updateIssueLabel<T>(labels: string[], issueId: string) {
    try {
      return await this.patch<T>('isssue-label/' + issueId, { labels });
    } catch (error) {
      console.log(error);
    }
  }

  async findLabelsByProject(query: { projectId?: string }) {
    try {
      return await this.get<ILabel[]>('label', query);
    } catch (error) {
      console.log(error);
    }
  }

  async createIssueView(issueView: IIssueViews) {
    try {
      return await this.post<IIssueViews>(
        issueView.project_id ? 'project-view' : 'issue-view',
        issueView
      );
    } catch (error) {
      console.log(error);
    }
  }

  async findIssueViewById<T>(id: string) {
    try {
      return await this.get<T>('issue-view/' + id);
    } catch (error) {
      console.log(error);
    }
  }

  async getIssueView<T>() {
    try {
      return await this.get<T>('issue-view');
    } catch (error) {
      console.log(error);
    }
  }

  async test(a: any) {
    try {
      return await this.post('test', a);
    } catch (error) {
      console.log(error);
    }
  }

  async getReaction(issueId: string) {
    try {
      return await this.get('issue-reaction/' + issueId);
    } catch (error) {
      console.log(error);
    }
  }

  async createReaction<T>(data: Partial<IIsueReaction>) {
    try {
      return await this.post<T>('issue-reaction', data);
    } catch (error) {
      console.log(error);
    }
  }

  async findReaction<T>(issueId: string) {
    try {
      return await this.get<T>('issue-reaction/' + issueId);
    } catch (error) {
      console.log(error);
    }
  }

  async removeReaction(id: string) {
    try {
      return await this.delete('issue-reaction/' + id);
    } catch (error) {
      console.log(error);
    }
  }

  async createIssueLink(data: Partial<IIsueLink>) {
    try {
      return await this.post<IIsueLink>('issue-link', data);
    } catch (error) {
      console.log(error);
    }
  }

  async findIssueLink(issueId: string) {
    try {
      return await this.get<IIsueLink[]>('issue-link/' + issueId);
    } catch (error) {
      console.log(error);
    }
  }

  async updateIssueLink(issueId: string, issueLink: IIsueLink) {
    try {
      return await this.patch<IIsueLink[]>('issue-link/' + issueId, issueLink);
    } catch (error) {
      console.log(error);
    }
  }

  async removeIssueLink(id: string) {
    try {
      return await this.delete('issue-link/' + id);
    } catch (error) {
      console.log(error);
    }
  }
}

const issueService = new IssueService();

export default issueService;
