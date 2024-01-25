import { PartialType } from "@nestjs/swagger";

export class CreateCycleIssueDto {
    issue_id: string;
    cycle_id: string;
}
export class UpdateCycleIssueDto extends PartialType(CreateCycleIssueDto) { }