
export class CreateWorkspaceMemberInviteDto {
    workspace: number;
    email: string;
    accepted: boolean;
    token: string;
    message: string;
    responded_at: Date;
    role: string;
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