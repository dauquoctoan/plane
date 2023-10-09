import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Workspace } from 'src/api/workspace/entitys/Workspace.entity';

@Table
export class FileAsset extends Model {
    @ForeignKey(() => Workspace)
    @Column
    workspace: number;

    @Column({ type: DataType.JSON, defaultValue: {} })
    attributes: string;

    @Column({ allowNull: false })
    asset: string;
}