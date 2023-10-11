import { Column, Model, Table, Length, ForeignKey, Index, DataType, HasMany } from 'sequelize-typescript';
import { AnalyticView } from 'src/api/analytic/entitys/AnalyticView.entity';
import { APIToken } from 'src/api/api_token/entitys/APIToken.entity';
import { FileAsset } from 'src/api/asset/entitys/FileAsset.entity';
import { ExporterHistory } from 'src/api/exporter/entitys/ExporterHistory.entity';
import { Notification } from 'src/api/notification/entitys/Notification.entity';
import { User } from 'src/api/user/entitys/User.entity';

@Table
export class Workspace extends Model {
    /**
     * * ======================================= 
     * ! =============== FOREIGN KEY ===========
     * * =======================================
     */

    @ForeignKey(() => User)
    @Column({ allowNull: false })
    owner: string;

    /**
    * * =======================================
    * ! ======== BINDING RELATIONSHIP =========
    * * =======================================
    */

    @HasMany(() => AnalyticView, { foreignKey: 'workspace' })
    AnalyticView: AnalyticView[];

    @HasMany(() => FileAsset)
    file_asset: FileAsset[];

    @HasMany(() => Notification)
    Notification: Notification[];

    @HasMany(() => ExporterHistory)
    exporter_history: ExporterHistory[];

    // @HasMany(() => APIToken, { foreignKey: 'workspace_id' })
    // APIToken: APIToken[];

    @HasMany(() => AnalyticView)
    analytic_view: AnalyticView[];

    /**
    * * ======================================= 
    * ! =============== PR ====================
    * * =======================================
    */

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