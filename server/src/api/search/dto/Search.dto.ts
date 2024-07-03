import { PartialType } from '@nestjs/swagger';

export class CreateAnalyticViewDto {
  workspace: string;
  name: string;
  description: string;
  query: string;
  query_dict: string;
}
export class UpdateAnalyticViewDto extends PartialType(CreateAnalyticViewDto) {}
