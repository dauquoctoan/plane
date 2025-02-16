import { CreateEstimatePointDto } from './EstimatePoint.dto';

export class CreateEstimateDto {
  project_id: string;
  workspace_id?: string;
  estimate_points: CreateEstimatePointDto[];
  name: string;
  description: string;
}

export class UpdateEstimateDto {
  id:string;
  project_id: string;
  workspace_id?: string;
  estimate_points: CreateEstimatePointDto[];
  name: string;
  description: string;
}
