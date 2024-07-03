import { IsDefined, IsEmpty, IsNotEmpty, IsOptional } from 'class-validator';
import { QueryIssueDto } from 'src/api/issue/dto/Issue.dto';

export class UpdateProjectViewDto {}

export class CreateProjectViewDto {
  @IsOptional()
  @IsNotEmpty()
  created_at: string;

  @IsOptional()
  @IsNotEmpty()
  workspace_id: string;

  @IsOptional()
  @IsNotEmpty()
  project_id: string;

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
