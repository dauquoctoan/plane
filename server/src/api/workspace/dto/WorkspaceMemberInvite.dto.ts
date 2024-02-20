
export class CreateWorkspaceMemberInviteDto {
    workspace_id: string;
    email: string;
    accepted: boolean;
    token: string;
    message: string;
    responded_at: Date;
    role: string;
}

export interface CreatesWorkspaceMemberInviteDto {
    data: CreateWorkspaceMemberInviteDto[];
}

export class UpdateWorkspaceMemberInviteDto {
    workspace: number;
    email: string;
    accepted: boolean;
    token: string;
    message: string;
    responded_at: Date;
    role: string;
}