export interface IResult<T> {
    code: 0 | 1
    data: T
    message: string
    statusCode: number
}
export interface IUser {
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
    last_workspace_id?: string;
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
    updatedAt?: string;
    user_timezone?: string;
    username?: string;
}
export interface IInfo {
    user: IUser | null;
    workspace: IWorkspace | null;
}

export interface IWorkspace {
    id?: number;
    owner?: string;
    user?: string;
    name?: string;
    logo?: string;
    slug?: string;
    organization_size?: string;
}

export interface IWorkspaceMemberInvite {
    workspace_id?: number;
    email?: string;
    accepted?: boolean;
    token?: string;
    message?: string;
    responded_at?: Date;
    role?: number;
}