import { IsDefined, IsEmpty, IsNotEmpty, IsOptional } from 'class-validator';
import { QueryIssueDto } from 'src/api/issue/dto/Issue.dto';

export class UpdateIssueViewDto {}

export class CreateIssueViewDto {
  @IsOptional()
  @IsNotEmpty()
  created_at: string;

  @IsOptional()
  @IsNotEmpty()
  workpsace_id: string;

  @IsDefined()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsNotEmpty()
  description?: string;

  @IsOptional()
  @IsNotEmpty()
  query?: QueryIssueDto;

  @IsOptional()
  @IsNotEmpty()
  access?: number;

  @IsOptional()
  @IsNotEmpty()
  query_data?: string;
}
