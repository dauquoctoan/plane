interface IBaseData{
    createdAt?:string;
    updatedAt?:string;
}
export interface IResult<T> {
    code: 0 | 1
    data: T
    message: string
    statusCode: number
}
export interface LinkProps {
    href: string;
    nickname?: string;
}

export type IData<T> = T | undefined;

export interface IUser extends IBaseData{
    USER_TIMEZONE_CHOICES?: string;
    avatar?: string;
    billing_address?: string;
    billing_address_country?: string;
    cover_image?: string;
    created_location?: string;
    display_name?: string;
    email?: string;

    first_name?: string;
    has_billing_address?: string;
    id?: string;
    is_active?: string;
    is_bot?: string;
    is_email_verified?: string;
    is_managed?: string;
    is_onboarded?: boolean;
    is_password_autoset?: string;
    is_password_expired?: string;
    is_staff?: string;
    is_superuser?: string;
    is_tour_completed?: string;
    last_location?: string;
    last_login_ip?: string;
    last_login_medium?: string;
    last_login_uagent?: string;
    last_logout_ip?: string;
    last_logout_time?: string;
    last_name?: string;
    last_workspace_id?: number;
    mobileNumber?: string;
    my_issues_prop?: string;
    onboarding_step?: {
        workspace_join: number;
        profile_complete: number;
        workspace_create: number;
        workspace_invite: number;
    };
    role?: string;
    token?: string;
    token_updated_at?: string;
    user_timezone?: string;
    username?: string;
}
export interface IInfo extends IUser {
    workspace?: IWorkspace | null;
}

export interface IWorkspace extends IBaseData{
    id?: number;
    owner?: string;
    user?: string;
    name?: string;
    logo?: string;
    slug?: string;
    organization_size?: string;
}

export interface IWorkspaceMemberInvite extends IBaseData{
    workspace_id?: number;
    email?: string;
    accepted?: boolean;
    token?: string;
    message?: string;
    responded_at?: Date;
    role?: number;
}

export interface IProject extends IBaseData{
    id?: number;
    estimate_id?: number;
    created_by?: string;
    default_state?: number;
    default_assignee?: string;
    project_lead?: string;
    workspace_id?: number;
    name?: string;
    description?: string;
    description_text?: string;
    description_html?: string;
    network?: string;
    identifier?: string;
    emoji?: string;
    icon_prop?: string;
    module_view?: boolean;
    cycle_view?: boolean;
    issue_views_view?: boolean;
    page_view?: boolean;
    inbox_view?: boolean;
    cover_image?: string;
    archive_in?: number;
    close_in?: number;
}

export interface Istate extends IBaseData{
    id: number;
    project_id?: number;
    project_detail?: IProject;
    created_by?: string;
    project_info?: IUser;
    name?: string;
    description?: string;
    color?: string;
    slug?: string;
    sequence?: number;
    group?: string;
    default?: boolean;
}

export interface IIssue extends IBaseData{
    project_id?: number;
    workspace_id?: number;
    parent?: number;
    state_id?: number;
    estimate_point?: number;
    name?: string;
    description?: string;
    description_html?: string;
    description_stripped?: string;
    priority?: string;
    start_date?: string;
    target_date?: string;
    sequence_id?: number;
    sort_order?: number;
    completed_at?: string;
    archived_at?: string;
    is_draft?: boolean;
}
export interface ILabel extends IBaseData{
    id: number;
    project_id: number;
    created_at: string;
    workspace_id: number;
    parent: string;
    name: string;
    description: string;
    color: string;
}
