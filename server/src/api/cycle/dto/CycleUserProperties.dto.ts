import { PartialType } from "@nestjs/swagger";

export class CreateCycleUserPropertiesDto {
    cycle_id:string;
    user_id:string;
    project_id:string;
    filters: string;
    display_filters: string;
    display_properties: string;
}

export class UpdateCycleUserPropertiesDto extends PartialType(CreateCycleUserPropertiesDto) {}