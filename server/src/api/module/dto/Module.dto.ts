import { PartialType } from "@nestjs/swagger";

export class CreateModuleDto {
    lead?: string;
    members?: string[];
    name: string;
    description?: string;
    description_text?: string;
    description_html?: string;
    start_date?: Date;
    target_date?: Date;
    status?: string;
    view_props?: string;
    sort_order?: number;
}

export class UpdateModuleDto extends PartialType(CreateModuleDto) { }