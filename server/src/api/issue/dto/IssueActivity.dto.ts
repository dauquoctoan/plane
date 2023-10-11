export class CreateIssueActivityDto {
    issue_comment: string;
    actor: string;
    issue: number;
    verb: string;
    field: string;
    old_value: string;
    new_value: string;
    comment: string;
    attachments: string;
    old_identifier: string;
    new_identifier: string;
    epoch: number;
}
export class UpdateIssueActivityDto { }