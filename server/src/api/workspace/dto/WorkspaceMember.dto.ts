
export class CreateWorkspaceMemberDto {
    workspace: number;
    member: number;
    role: number;
    company_role: string;
    view_props: string;
    default_props: string;
}

export class UpdateWorkspaceMemberDto {
    workspace: number;
    member: number;
    role: number;
    company_role: string;
    view_props: string;
    default_props: string;
}