export class CreateExporterHistoryDto {
    workspace: number;
    provider: string;
    status: string;
    reason: string;
    project: string;
    key: string;
    url: string;
    token: string;
    initiated_by: string;
}
export class UpdateExporterHistoryDto { }
