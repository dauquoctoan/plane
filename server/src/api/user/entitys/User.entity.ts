import sequelize, { Sequelize } from 'sequelize';
import { BelongsToMany, Column, CreatedAt, DataType, HasMany, Length, Model, Table, PrimaryKey, Is, ForeignKey, BelongsTo, Unique } from 'sequelize-typescript';
import { APIToken } from 'src/api/api_token/entitys/APIToken.entity';
import { Cycle } from 'src/api/cycle/entitys/Cycle.entity';
import { CycleFavorite } from 'src/api/cycle/entitys/CycleFavorite.entity';
import { CycleUserProperties } from 'src/api/cycle/entitys/CycleUserProperties';
import { Importer } from 'src/api/importer/entitys/Importer.entity';
import { Issue } from 'src/api/issue/entitys/Issue.entity';
import { IssueActivity } from 'src/api/issue/entitys/IssueActivity.entity';
import { IssueAssignee } from 'src/api/issue/entitys/IssueAssignee.entity';
import { IssueComment } from 'src/api/issue/entitys/IssueComment.entity';
import { IssueProperty } from 'src/api/issue/entitys/IssueProperty.entity';
import { IssueReaction } from 'src/api/issue/entitys/IssueReaction.entity';
import { IssueSubscriber } from 'src/api/issue/entitys/IssueSubscriber.entity';
import { Label } from 'src/api/issue/entitys/Label.entity';
import { Module } from 'src/api/module/entitys/Module.entity';
import { ModuleFavorite } from 'src/api/module/entitys/ModuleFavorite.entity';
import { ModuleMember } from 'src/api/module/entitys/ModuleMember.entity';
import { ModuleUserProperties } from 'src/api/module/entitys/ModuleUserProperties.entity';
import { Notification } from 'src/api/notification/entitys/Notification.entity';
import { Page } from 'src/api/page/entitys/Page.entity';
import { PageFavorite } from 'src/api/page/entitys/PageFavorite.entity';
import { Project } from 'src/api/project/entitys/Project.entity';
import { ProjectMember } from 'src/api/project/entitys/ProjectMember.entity';
import { ProjectPublicMember } from 'src/api/project/entitys/ProjectPublicMember.entity';
import { ProjectFavorite } from 'src/api/project/entitys/projectFavorite.entity';
import { SocialLoginConnection } from 'src/api/social_connection/entitys/SocialLoginConnection.entity';
import { State } from 'src/api/state/entitys/State.entity';
import { IssueView } from 'src/api/view/entitys/IssueView.entity';
import { IssueViewFavorite } from 'src/api/view/entitys/IssueViewFavorite.entity';
import { Team } from 'src/api/workspace/entitys/Team.entity';
import { TeamMember } from 'src/api/workspace/entitys/TeamMember.entity';
import { Workspace } from 'src/api/workspace/entitys/Workspace.entity';
import { WorkspaceMember } from 'src/api/workspace/entitys/WorkspaceMember.entity';
import { WorkspaceTheme } from 'src/api/workspace/entitys/WorkspaceTheme.entity';
import { DEFAULT_ONBOARDING } from 'src/constants/entity-constant';
import { validEmail } from 'src/helper/regex';

@Table
export class User extends Model<User> {
    @Column({ type: sequelize.UUID, defaultValue: sequelize.UUIDV4, allowNull: false, primaryKey: true })
    id: string;
    /**
    * ! PK
    */

    @ForeignKey(() => Workspace)
    @Column({ type: sequelize.UUID, allowNull: true })
    last_workspace_id: string;

    @BelongsTo(() => Workspace, { foreignKey: 'last_workspace_id', onDelete:'CASCADE' })
    workspace: Workspace;

    /**
    * ! RELATIONSHIP
    */

    @HasMany(() => Label, { foreignKey: 'created_at' })
    label: Label[];

    @HasMany(() => IssueView, { foreignKey: 'created_at' })
    issue_view: IssueView[];

    @HasMany(() => State, 'created_by')
    state: State;

    @HasMany(() => Module, 'member')
    members_module: Module[];

    @HasMany(() => IssueSubscriber,{foreignKey:'subscriber'})
    issue_subscribers: IssueSubscriber[];

    @HasMany(() => ProjectMember,{foreignKey:'member'})
    project_members: ProjectMember[];

    @HasMany(() => IssueViewFavorite,{foreignKey:'user_id'})
    issue_view_favorites: IssueViewFavorite[];

    @HasMany(() => SocialLoginConnection,{foreignKey:'user_id'})
    social_login_connections: SocialLoginConnection[];

    @HasMany(() => ModuleUserProperties,{foreignKey:'user_id'})
    module_user_properties: ModuleUserProperties[];

    @HasMany(() => ProjectFavorite,{foreignKey:'user_id'})
    project_favorites: ProjectFavorite[];

    @HasMany(() => ProjectPublicMember,{foreignKey:'member'})
    project_public_member: ProjectPublicMember[];

    @HasMany(() => Module, { foreignKey: 'lead' })
    lead_modules: Module[];

    @HasMany(() => Module, { foreignKey: 'member' })
    members_modules: Module[];

    @HasMany(() => CycleUserProperties, { foreignKey: 'user_id' })
    cycle_user_properties: CycleUserProperties[];

    @HasMany(() => Project, { foreignKey: 'default_assignee' })
    default_assignes: Project[];

    @HasMany(() => Project, 'created_by')
    project: Project[];

    @HasMany(() => Project, { foreignKey: 'project_lead' })
    project_leads: Project[];

    @HasMany(() => APIToken, {foreignKey:'user_id'})
    api_tokens: APIToken[];

    @HasMany(() => PageFavorite, {foreignKey:'user_id'})
    page_favorites: PageFavorite[];

    @HasMany(() => Page, {foreignKey:'owned_by'})
    pages: Page[];

    @HasMany(() => Notification, { foreignKey: 'triggered_by' })
    triggereds_by: Notification[];

    @HasMany(() => Notification, { foreignKey: 'receiver' })
    receivers: Notification[];

    @HasMany(() => ModuleMember,{foreignKey:'member'})
    module_members: ModuleMember[];

    @HasMany(() => ModuleFavorite, {foreignKey:'user_id'})
    module_favorites: ModuleFavorite[];

    @HasMany(() => Workspace, {foreignKey: 'owner', onDelete:'CASCADE'})
    workspaces: Workspace[];

    @HasMany(() => WorkspaceMember, {foreignKey:'member'})
    workspace_members: Workspace[];

    @HasMany(() => WorkspaceTheme, {foreignKey:'actor'})
    workspace_themes: WorkspaceTheme[];

    @HasMany(() => IssueProperty,{foreignKey:'user_id'})
    issue_propertys: IssueProperty[];

    @HasMany(() => IssueComment, {foreignKey:'actor'})
    issue_comments: IssueComment[];

    @HasMany(() => IssueReaction, {foreignKey:'actor'})
    issue_reactions: IssueReaction[];

    @HasMany(() => IssueActivity, {foreignKey:'actor'})
    issue_activitys: IssueActivity[];

    @HasMany(() => Importer, {foreignKey:'initiated_by'})
    importers: Importer[];

    @HasMany(() => Cycle, {foreignKey:'owned_by'})
    cycles: Cycle[];

    @HasMany(() => CycleFavorite, {foreignKey:'user_id'})
    cycle_favorites: CycleFavorite[];

    @BelongsToMany(() => Team, () => TeamMember)
    Team: Team[];

    @HasMany(() => Issue, {foreignKey:'create_by', as: 'creator'})
    issue_create_by: Issue[];

    @BelongsToMany(() => Issue, () => IssueAssignee)
    issue: Issue[];

    /**
    * ! PR
    */
    @Unique({name: 'username_unique', msg: 'username_should_be_unique'})
    @Column({ allowNull: false})
    username: string;

    @Column
    mobileNumber: string;

    @Is('email', (data) => {
        if (!validEmail(data)) throw Error('Invalid Email')
    })
    @Unique({name: 'email_unique', msg: 'email_should_be_unique'})
    @Column({ allowNull: false })
    email: string;

    @Column
    first_name: string;

    @Column
    last_name: string;

    @Column
    avatar: string;

    @Column
    cover_image: string;

    @Column
    last_location: string;

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

    @Column
    token: string;

    @Column({ defaultValue: 'VIETNAMESE' })
    billing_address_country: string;

    @Column
    billing_address: string;

    @Column
    has_billing_address: string;

    @Column
    USER_TIMEZONE_CHOICES: string;

    @Column({ type: sequelize.DATEONLY, defaultValue: sequelize.NOW })
    user_timezone: Date;

    @CreatedAt
    last_active: Date;

    @CreatedAt
    last_login_time: Date;

    @CreatedAt
    last_logout_time: Date;

    @Column
    last_login_ip: string;

    @Column
    last_logout_ip: string;

    @Column({ defaultValue: 'email' })
    last_login_medium: string;

    @Column
    last_login_uagent: string;

    @Column
    token_updated_at: Date;

    @Column({ type: DataType.JSON })
    my_issues_prop: string;

    @Column
    role: string;

    @Column({ defaultValue: false })
    is_bot: boolean;

    @Column({ type: DataType.JSON, defaultValue: {} })
    theme: string;

    @Column({ })
    display_name: string;

    @Column({ defaultValue: false })
    is_tour_completed: boolean;

    @Column({ type: DataType.JSON, defaultValue: DEFAULT_ONBOARDING })
    onboarding_step: string;
}