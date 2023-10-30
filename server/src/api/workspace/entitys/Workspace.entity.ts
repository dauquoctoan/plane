import { Column, Model, Table, Length, ForeignKey, Index, DataType, HasMany, BelongsTo, BeforeDestroy } from 'sequelize-typescript';
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

@Table
export class Workspace extends Model {
    /**
    * ! table Workspace
    * @ForeignKey User
    * @HasMany Project, GlobalView, Team, TeamMember, ProjectIdentifier, 
    * WorkspaceTheme, AnalyticView, WorkspaceMemberInvite, WorkspaceMember, FileAsset, 
    * APIToken, ExporterHistory, Notification;
    */

    /* ================================================== */
    @ForeignKey(() => User)
    @Column({ type: sequelize.UUID, allowNull: false })
    owner: string;

    @BelongsTo(() => User)
    user: User;

    @HasMany(() => Project)
    project_leads: Project[];

    @HasMany(() => GlobalView)
    global_views: GlobalView[];

    @HasMany(() => Team)
    teams: Team[];

    @HasMany(() => TeamMember)
    team_members: Team[];

    @HasMany(() => ProjectIdentifier)
    project_identifiers: ProjectIdentifier[];

    @HasMany(() => WorkspaceTheme)
    workspace_themes: WorkspaceTheme[];

    @HasMany(() => AnalyticView, { foreignKey: 'workspace' })
    analytic_views: AnalyticView[];

    @HasMany(() => WorkspaceMemberInvite)
    workspace_member_invites: WorkspaceMemberInvite[];

    @HasMany(() => WorkspaceMember)
    workspace_members: WorkspaceMember[];

    @HasMany(() => FileAsset)
    file_assets: FileAsset[];

    @HasMany(() => Notification)
    notifications: Notification[];

    @HasMany(() => ExporterHistory)
    exporter_historys: ExporterHistory[];

    @HasMany(() => APIToken)
    apitokens: APIToken[];

    @Length({ max: 80 })
    @Column({ allowNull: false })
    name: string;

    @Column
    logo: string;

    @Index('slug-index')
    @Length({ max: 48 })
    @Column({ type: DataType.CHAR, unique: true })
    slug: string;

    @Length({ max: 20 })
    @Column
    organization_size: string;
}