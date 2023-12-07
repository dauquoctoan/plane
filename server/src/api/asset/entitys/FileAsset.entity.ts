import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Workspace } from 'src/api/workspace/entitys/Workspace.entity';

@Table
export class FileAsset extends Model<FileAsset> {
    /**
    * !FK
    */
    @ForeignKey(() => Workspace)
    @Column({ allowNull: false })
    workspace_id: number;

    /**
    * ! RELATIONSHIP
    */

    @BelongsTo(() => Workspace, {foreignKey:'workspace_id'})
    workspace: Workspace;

    /**
    * ! PR
    */

    @Column({ type: DataType.JSON, defaultValue: {} })
    attributes: string;

    @Column({ allowNull: false })
    asset: string;
}