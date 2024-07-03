export class CreateProjectDto {
  id: string;
  created_by: string;
  estimate_id: string;
  default_assignee: string;
  project_lead: string;
  workspace_id: string;
  name: string;
  description: string;
  description_text: string;
  description_html: string;
  network: number;
  identifier: string;
  emoji: string;
  icon_prop: string;
  module_view: boolean;
  cycle_view: boolean;
  issue_views_view: boolean;
  page_view: boolean;
  inbox_view: boolean;
  cover_image: string;
  archive_in: number;
  close_in: number;
}

export class UpdateProjectDto {}
