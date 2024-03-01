
export class CreateWorkspaceMemberDto {
    workspace: number;
    member: string;
    role: number;
    company_role?: string;
    view_props?: string;
    default_props?: string;
}

export class CreateWorkspaceMemberDtoWidthToken{
    workspace_id: string;
    token: string;
}

export class UpdateWorkspaceMemberDto {
    workspace: number;
    member: number;
    role: number;
    company_role: string;
    view_props: string;
    default_props: string;
}