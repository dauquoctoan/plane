export class CreateInboxIssueDto {
  inbox: number;
  issue: number;
  duplicate_to: number;
  status: number;
  snoozed_till: Date;
  source: string;
}
export class UpdateInboxIssueDto {}
