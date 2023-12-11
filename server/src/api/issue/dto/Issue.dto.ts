import { PartialType } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateIssueDto {
    parent: number;
    state: number;
    PRIORITY_CHOICES: string;
    estimate_point: number;
    name: string;
    description: string;
    description_html: string;
    description_stripped: string;
    priority: string;
    start_date: Date;
    target_date: Date;
    sequence_id: number;
    sort_order: number;
    completed_at: Date;
    archived_at: Date;
    is_draft: boolean;
    objects: boolean;
    issue_objects: string;
}
export class UpdateIssueDto extends PartialType(CreateIssueDto){
}

export class QueryIssueDto{
    @IsOptional()
    @IsNotEmpty()
    assignee?: string;

    @IsOptional()
    @IsNotEmpty()
    projectId?: string;

    @IsOptional()
    @IsNotEmpty()
    userId?: string;
}