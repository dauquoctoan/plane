
export class CreateWorkspaceMemberInviteDto {
    workspace: number;
    email: string;
    accepted: boolean;
    token: string;
    message: string;
    responded_at: Date;
    role: string;
}

export interface CreatesWorkspaceMemberInviteDto {
    [key: string]: CreateWorkspaceMemberInviteDto;
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