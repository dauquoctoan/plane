export class CreateEstimatePointDto {
  estimate_id?: string;
  key?: number;
  description?: string;
  value?: string;
}
export class UpdateEstimatePointDto {
  estimate: number;
  key: number;
  description: string;
  value: string;
}
