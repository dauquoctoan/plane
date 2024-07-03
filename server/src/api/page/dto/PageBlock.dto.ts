export class CreatePageBlockDto {
  page: number;
  issue: number;
  name: string;
  description: string;
  description_html: string;
  description_stripped: string;
  completed_at: Date;
  sort_order: string;
  sync: boolean;
}
export class UpdatePageBlockDto {}
