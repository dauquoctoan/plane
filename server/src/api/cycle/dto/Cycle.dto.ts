import { PartialType } from "@nestjs/swagger";

export class CreateCycleDto {
    name: string;
    description?: string;
    start_date?: Date;
    end_date?: Date;
}

export class UpdateCycleDto extends PartialType(CreateCycleDto) { }