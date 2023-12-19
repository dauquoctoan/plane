export class UpdateIssueAssigneeDto {
    assignees: string[];
    issue_id: string;
}
export class CreateIssueAssigneeDto {
    issue_id: string;
    assignee: string;
}