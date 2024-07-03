export class UpdateIssueReactionDto {
  actor: string;
  issue_id: number;
  reaction: string;
}
export class CreateIssueReactionDto {
  actor: string;
  issue_id: string;
  reaction: string;
}
