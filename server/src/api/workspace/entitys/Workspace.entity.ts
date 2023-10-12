import { Column, Model, Table, Length, ForeignKey, Index, DataType, HasMany, BelongsTo } from 'sequelize-typescript';
import { AnalyticView } from 'src/api/analytic/entitys/AnalyticView.entity';
import { APIToken } from 'src/api/api_token/entitys/APIToken.entity';
import { FileAsset } from 'src/api/asset/entitys/FileAsset.entity';
import { ExporterHistory } from 'src/api/exporter/entitys/ExporterHistory.entity';
import { Importer } from 'src/api/importer/entitys/Importer.entity';
import { Notification } from 'src/api/notification/entitys/Notification.entity';
import { User } from 'src/api/user/entitys/User.entity';
import { WorkspaceMember } from './WorkspaceMember.entity';
import { WorkspaceMemberInvite } from './WorkspaceMemberInvite.entity';
import { WorkspaceTheme } from './WorkspaceTheme.entity';

@Table
export class Workspace extends Model {
    @ForeignKey(() => User)
    @Column({ allowNull: false })
    owner: string;
    //thieu

    @HasMany(() => WorkspaceTheme)
    workspace_themes: WorkspaceTheme[];

    @HasMany(() => AnalyticView, { foreignKey: 'workspace' })
    analytic_views: AnalyticView[];

    @HasMany(() => WorkspaceMemberInvite)
    workspace_member_invites: WorkspaceMemberInvite[];

    @HasMany(() => WorkspaceMember)
    workspace_member: WorkspaceMember[];

    @HasMany(() => FileAsset)
    file_asset: FileAsset[];

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