import { PartialType } from '@nestjs/swagger';

export class CreateModuleUserPropertiesDto {
  module_id: string;
  user_id: string;
  project_id: string;
  filters: string;
  display_filters: string;
  display_properties: string;
}

export class UpdateModuleUserPropertiesDto extends PartialType(
  CreateModuleUserPropertiesDto,
) {}
