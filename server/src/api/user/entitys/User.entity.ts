import sequelize, { Sequelize } from 'sequelize';
import { BelongsToMany, Column, CreatedAt, DataType, HasMany, Length, Model, Table, PrimaryKey } from 'sequelize-typescript';
import { APIToken } from 'src/api/api_token/entitys/APIToken.entity';
import { Cycle } from 'src/api/cycle/entitys/Cycle.entity';
import { CycleFavorite } from 'src/api/cycle/entitys/CycleFavorite.entity';
import { Importer } from 'src/api/importer/entitys/Importer.entity';
import { Issue } from 'src/api/issue/entitys/Issue.entity';
import { IssueActivity } from 'src/api/issue/entitys/IssueActivity.entity';
import { IssueAssignee } from 'src/api/issue/entitys/IssueAssignee.entity';
import { IssueComment } from 'src/api/issue/entitys/IssueComment.entity';
import { IssueProperty } from 'src/api/issue/entitys/IssueProperty.entity';
import { IssueReaction } from 'src/api/issue/entitys/IssueReaction.entity';
import { IssueSubscriber } from 'src/api/issue/entitys/IssueSubscriber.entity';
import { Module } from 'src/api/module/entitys/Module.entity';
import { ModuleFavorite } from 'src/api/module/entitys/ModuleFavorite.entity';
import { ModuleMember } from 'src/api/module/entitys/ModuleMember.entity';
import { Notification } from 'src/api/notification/entitys/Notification.entity';
import { Page } from 'src/api/page/entitys/Page.entity';
import { PageFavorite } from 'src/api/page/entitys/PageFavorite.entity';
import { Project } from 'src/api/project/entitys/Project.entity';
import { ProjectMember } from 'src/api/project/entitys/ProjectMember.entity';
import { ProjectPublicMember } from 'src/api/project/entitys/ProjectPublicMember.entity';
import { ProjectFavorite } from 'src/api/project/entitys/rojectFavorite.entity';
import { SocialLoginConnection } from 'src/api/social_connection/entitys/SocialLoginConnection.entity';
import { IssueViewFavorite } from 'src/api/view/entitys/IssueViewFavorite.entity';
import { Team } from 'src/api/workspace/entitys/Team.entity';
import { TeamMember } from 'src/api/workspace/entitys/TeamMember.entity';
import { Workspace } from 'src/api/workspace/entitys/Workspace.entity';
import { WorkspaceMember } from 'src/api/workspace/entitys/WorkspaceMember.entity';
import { WorkspaceTheme } from 'src/api/workspace/entitys/WorkspaceTheme.entity';
import { DEFAULT_ONBOARDING } from 'src/constants/entity-constant';

@Table
export class User extends Model {
    /**
    * ! PK
    */

    @Column({ type: sequelize.UUID, defaultValue: sequelize.UUIDV4, allowNull: false, primaryKey: true })
    id: string;

    /**
    * ! RELATIONSHIP
    */

    @HasMany(() => IssueSubscriber)
    issue_subscribers: IssueSubscriber[];

    @HasMany(() => ProjectMember)
    project_members: ProjectMember[];

    @HasMany(() => IssueViewFavorite)
    issue_view_favorites: IssueViewFavorite[];

    @HasMany(() => SocialLoginConnection)
    social_login_connections: SocialLoginConnection[];

    @HasMany(() => ProjectFavorite)
    project_favorites: ProjectFavorite[];

    @HasMany(() => ProjectPublicMember)
    project_public_member: ProjectPublicMember[];

    @HasMany(() => Module, { foreignKey: 'lead' })
    leads_modules: Module[];

    @HasMany(() => Module, { foreignKey: 'member' })
    members_modules: Module[];

    @HasMany(() => Project, { foreignKey: 'default_assignee' })
    default_assignes: Project[];

    @HasMany(() => Project, { foreignKey: 'project_lead' })
    project_leads: Project[];

    @HasMany(() => APIToken)
    api_tokens: APIToken[];

    @HasMany(() => PageFavorite)
    page_favorites: PageFavorite[];

    @HasMany(() => Page)
    pages: Page[];

    @HasMany(() => Notification, { foreignKey: 'triggered_by' })
    triggereds_by: Notification[];

    @HasMany(() => Notification, { foreignKey: 'receiver' })
    receivers: Notification[];

    @HasMany(() => ModuleMember)
    module_members: ModuleMember[];

    @HasMany(() => ModuleFavorite)
    module_favorites: ModuleFavorite[];

    @HasMany(() => Workspace)
    workspaces: Workspace[];

    @HasMany(() => WorkspaceMember)
    workspace_members: Workspace[];

    @HasMany(() => WorkspaceTheme)
    workspace_themes: WorkspaceTheme[];

    @HasMany(() => IssueProperty)
    issue_propertys: IssueProperty[];

    @HasMany(() => IssueComment)
    issue_comments: IssueComment[];

    @HasMany(() => IssueReaction)
    issue_reactions: IssueReaction[];

    @HasMany(() => IssueActivity)
    issue_activitys: IssueActivity[];

    @HasMany(() => Importer)
    importers: Importer[];

    @HasMany(() => Cycle)
    cycles: Cycle[];

    @HasMany(() => CycleFavorite)
    cycle_favorites: CycleFavorite[];

    @BelongsToMany(() => Team, () => TeamMember)
    Team: Team[];

    @BelongsToMany(() => Issue, () => IssueAssignee)
    issue: Issue[];

    /**
    * ! PR
    */

    @Length({ max: 128 })
    @Column({ allowNull: false, unique: true })
    username: string;

    @Length({ max: 255 })
    @Column
    mobileNumber: string;

    @Length({ max: 255 })
    @Column({ allowNull: false, unique: true })
    email: string;

    @Length({ max: 255 })
    @Column
    first_name: string;

    @Length({ max: 255 })
    @Column
    last_name: string;

    @Length({ max: 255 })
    @Column
    avatar: string;

    @Length({ max: 800 })
    @Column
    cover_image: string;

    @Length({ max: 255 })
    @Column
    last_location: string;

    @Length({ max: 255 })
    @Column
    created_location: string;

    @Column({ defaultValue: false })
    is_superuser: boolean;

    @Column({ defaultValue: false })
    is_managed: boolean;

    @Column({ defaultValue: false })
    is_password_expired: boolean;

    @Column({ defaultValue: true })
    is_active: boolean;

    @Column({ defaultValue: false })
    is_staff: boolean;

    @Column({ defaultValue: false })
    is_email_verified: boolean;

    @Column({ defaultValue: false })
    is_password_autoset: boolean;

    @Column({ defaultValue: false })
    is_onboarded: boolean;

    @Length({ max: 64 })
    @Column
    token: string;

    @Length({ max: 255 })
    @Column({ defaultValue: 'VIETNAMESE' })
    billing_address_country: string;

    @Column
    billing_address: string;

    @Column
    has_billing_address: string;

    @Column({ type: sequelize.DATEONLY, defaultValue: sequelize.NOW })
    USER_TIMEZONE_CHOICES: Date;

    @Column({ type: sequelize.DATEONLY, defaultValue: sequelize.NOW })
    user_timezone: Date;

    @CreatedAt
    last_active: Date;

    @CreatedAt
    last_login_time: Date;

    @CreatedAt
    last_logout_time: Date;

    @Length({ max: 255 })
    @Column
    last_login_ip: string;

    @Length({ max: 255 })
    @Column
    last_logout_ip: string;

    @Length({ max: 20 })
    @Column({ defaultValue: 'email' })
    last_login_medium: string;

    @Column
    last_login_uagent: string;

    @Column
    token_updated_at: Date;

    @Column({ type: DataType.BIGINT })
    last_workspace_id: number;

    @Column({ type: DataType.JSON })
    my_issues_prop: string;

    @Length({ max: 300 })
    @Column
    role: string;

    @Column({ defaultValue: false })
    is_bot: boolean;

    @Column({ type: DataType.JSON, defaultValue: {} })
    theme: string;

    @Length({ max: 300 })
    @Column({ defaultValue: '' })
    display_name: string;

    @Column({ defaultValue: false })
    is_tour_completed: boolean;

    @Column({ type: DataType.JSON, defaultValue: DEFAULT_ONBOARDING })
    onboarding_step: string;
}