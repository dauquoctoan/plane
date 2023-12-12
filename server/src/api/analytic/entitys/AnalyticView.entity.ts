import sequelize from 'sequelize';
import { BelongsTo, Column, DataType, ForeignKey, Length, Model, Table } from 'sequelize-typescript';
import { Workspace } from 'src/api/workspace/entitys/Workspace.entity';

@Table
export class AnalyticView extends Model<AnalyticView> {
    @Column({ type: sequelize.UUID, defaultValue: sequelize.UUIDV4, allowNull: false, primaryKey: true })
    id: string;
    /**
    * !FK
    */
    @ForeignKey(() => Workspace)
    @Column({ type: sequelize.UUID, allowNull: false })
    workspace_id: string;

    /**
    * ! RELATIONSHIP
    */

    @BelongsTo(() => Workspace, {foreignKey:'workspace_id'})
    workpsaceInfo: Workspace;

    /**
    * ! PR
    */

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