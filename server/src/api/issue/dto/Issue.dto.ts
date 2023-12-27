import { PartialType } from "@nestjs/swagger";
import { IsEmpty, IsNotEmpty, IsOptional,IsEmail, IsDefined } from "class-validator";

export class CreateIssueDto {
    parent: number;
    state: number;
    assignees: string[];
    labels: string[];
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
    projects?: string[];

    @IsOptional()
    @IsNotEmpty()
    userId?: string;

    @IsOptional()
    @IsNotEmpty()
    states?: string[];

    @IsOptional()
    @IsNotEmpty()
    labels?: string[];

    @IsOptional()
    @IsNotEmpty()
    priorities?: string[];

    @IsOptional()
    @IsNotEmpty()
    createBys?: string[];

    @IsOptional()
    @IsNotEmpty()
    assignees?: string[];

    @IsOptional()
    @IsNotEmpty()
    subscribers?: string[];

    @IsOptional()
    @IsNotEmpty()
    startDate?: string;

    @IsOptional()
    @IsEmpty()
    dueDate?: string;
}