export class UpdateIssueCommentDto {
    issue: number;
    actor: string;
    comment_stripped: string;
    comment_json: string;
    comment_html: string;
    attachments: string;
    access: string;
}
export class CreateIssueCommentDto { }