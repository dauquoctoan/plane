import sequelize from 'sequelize';
import { BelongsTo, Column, DataType, ForeignKey, Is, Length, Model, Table } from 'sequelize-typescript';
import { Workspace } from 'src/api/workspace/entitys/Workspace.entity';
import { ACCESS } from 'src/constants/entity-constant';
import { INVALID_ACCESS } from 'src/constants/message-constant';

@Table
export class ProjectView extends Model<ProjectView> {
    @Column({ type: sequelize.UUID, defaultValue: sequelize.UUIDV4, allowNull: false, primaryKey: true })
    id: string;
    /**
    * ! table GlobalView
    * @ForeignKey Workspace
    */

    /* ================================================== */

    @ForeignKey(() => Workspace)
    @Column({ type: sequelize.UUID, allowNull: false })
    workspace_id: string;

    @BelongsTo(() => Workspace, { foreignKey: 'workspace_id' })
    workspace: Workspace;

    @Length({ max: 255 })
    @Column({ type: sequelize.UUID, allowNull: false })
    name: string;

    @Column
    description: string;

    @Column({ type: DataType.JSON })
    query: string;

    @Is('access', (value) => {
        if (!ACCESS.includes(value)) {
            throw new Error(INVALID_ACCESS);
        }
    })
    @Column({ defaultValue: 1 })
    access: string;

    @Column({ type: DataType.JSON, defaultValue: {} })
    query_data: string;
}