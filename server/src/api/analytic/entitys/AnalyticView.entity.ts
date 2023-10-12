import { BelongsTo, Column, DataType, ForeignKey, Length, Model, Table } from 'sequelize-typescript';
import { Workspace } from 'src/api/workspace/entitys/Workspace.entity';

@Table
export class AnalyticView extends Model {
    @ForeignKey(() => Workspace)
    @Column({ allowNull: false })
    workspace: number;

    @BelongsTo(() => Workspace)
    Workspace: Workspace;

    @Length({ max: 255 })
    @Column({ allowNull: false })
    name: string;

    @Column({ type: DataType.TEXT })
    description: string;

    @Column({ type: DataType.JSON })
    query: string;

    @Column({ type: DataType.JSON, defaultValue: {} })
    query_dict: string;
}