import { PartialType } from "@nestjs/swagger";

export class CreateCycleDto {
    name: string;
    owned_by: string;
    description: string;
    start_date: Date;
    end_date: Date;
    view_props: string;
    sort_order: number;
}
export class UpdateCycleDto extends PartialType(CreateCycleDto) { }