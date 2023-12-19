export class UpdateIssueLabelDto {
    issue_id: string;
    labels: string[];
}
export class CreateIssueLabelDto {
    issue_id: string;
    label_id: string;
}

