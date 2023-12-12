import { Column, Model, Table, Length, ForeignKey, DataType, HasMany, BelongsTo, BeforeDestroy, Unique } from 'sequelize-typescript';
import { AnalyticView } from 'src/api/analytic/entitys/AnalyticView.entity';
import { APIToken } from 'src/api/api_token/entitys/APIToken.entity';
import { FileAsset } from 'src/api/asset/entitys/FileAsset.entity';
import { ExporterHistory } from 'src/api/exporter/entitys/ExporterHistory.entity';
import { Notification } from 'src/api/notification/entitys/Notification.entity';
import { User } from 'src/api/user/entitys/User.entity';
import { WorkspaceMember } from './WorkspaceMember.entity';
import { WorkspaceMemberInvite } from './WorkspaceMemberInvite.entity';
import { WorkspaceTheme } from './WorkspaceTheme.entity';
import sequelize from 'sequelize';
import { Project } from 'src/api/project/entitys/Project.entity';
import { ProjectIdentifier } from 'src/api/project/entitys/ProjectIdentifier.entity';
import { GlobalView } from 'src/api/view/entitys/GlobalView.entity';
import { Team } from './Team.entity';
import { TeamMember } from './TeamMember.entity';
import { Issue } from 'src/api/issue/entitys/Issue.entity';
import { Label } from 'src/api/issue/entitys/Label.entity';
import { ProjectMember } from 'src/api/project/entitys/ProjectMember.entity';

@Table
export class Workspace extends Model<Workspace> {
    @Column({ type: sequelize.UUID, defaultValue: sequelize.UUIDV4, allowNull: false, primaryKey: true })
    id: string;
    /**
    * ! table Workspace
    * @ForeignKey User
    * @HasMany Project, GlobalView, Team, TeamMember, ProjectIdentifier, 
    * WorkspaceTheme, AnalyticView, WorkspaceMemberInvite, WorkspaceMember, FileAsset, 
    * APIToken, ExporterHistory, Notification;
    */
    @ForeignKey(() => User)
    @Column({ type: sequelize.UUID, allowNull: false })
    owner: string;
    

    /* ================================================== */
    @BelongsTo(() => User, {foreignKey:'owner'})
    user: User;

    @HasMany(() => Label, { foreignKey: 'workspace_id' })
    labels: Label[];

    @HasMany(() => ProjectMember, { foreignKey: 'workspace_id' })
    project_member: ProjectMember[];

    @HasMany(() => User, {foreignKey:'last_workspace_id'})
    last_workspace_detail: User[];

    @HasMany(() => Project, { foreignKey: 'workspace_id' })
    workspace_projects: Project[];

    @HasMany(() => Issue, { foreignKey: 'workspace_id' })
    issue: Issue[];

    @HasMany(() => GlobalView,{foreignKey: 'workspace_id'})
    global_views: GlobalView[];

    @HasMany(() => Team, {foreignKey:'workspace_id'})
    teams: Team[];

    @HasMany(() => TeamMember, {foreignKey:'workspace_id'})
    team_members: TeamMember[];

    @HasMany(() => ProjectIdentifier, {foreignKey:'workspace_id'})
    project_identifiers: ProjectIdentifier[];

    @HasMany(() => WorkspaceTheme, {foreignKey:'workspace_id'})
    workspace_themes: WorkspaceTheme[];

    @HasMany(() => AnalyticView, { foreignKey: 'workspace_id' })
    analytic_views: AnalyticView[];

    @HasMany(() => WorkspaceMemberInvite, {foreignKey:'workspace_id'})
    workspace_member_invites: WorkspaceMemberInvite[];

    @HasMany(() => WorkspaceMember, {foreignKey:'workspace_id'})
    workspace_members: WorkspaceMember[];

    @HasMany(() => FileAsset, {foreignKey:'workspace_id'})
    file_assets: FileAsset[];

    @HasMany(() => Notification, {foreignKey:'workspace_id'})
    notifications: Notification[];

    @HasMany(() => ExporterHistory, {foreignKey:'workspace_id'})
    exporter_historys: ExporterHistory[];

    @HasMany(() => APIToken, {foreignKey:'workspace_id'})
    apitokens: APIToken[];

    /**
    * MyMetho pr
    */

    @Length({ max: 80 })
    @Column({ allowNull: false })
    name: string;

    @Column
    logo: string;

    @Unique({name: 'slug_unique', msg: 'slug_should_be_unique'})
    @Length({ max: 48 })
    @Column({ type: DataType.CHAR })
    slug: string;

    @Length({ max: 20 })
    @Column
    organization_size: string;
}