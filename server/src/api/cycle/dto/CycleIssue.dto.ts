import { PartialType } from "@nestjs/swagger";

export class CreateCycleIssueDto {
    issue: number;
    cycle: number;
}
export class UpdateCycleIssueDto extends PartialType(CreateCycleIssueDto) { }