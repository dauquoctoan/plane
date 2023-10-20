import { BelongsTo, Column, DataType, ForeignKey, Is, Length, Model, Table } from 'sequelize-typescript';
import { Workspace } from 'src/api/workspace/entitys/Workspace.entity';
import { ACCESS } from 'src/constants/entity-constant';
import { INVALID_ACCESS } from 'src/constants/message-constant';

@Table
export class GlobalView extends Model {
    /**
    * ! table GlobalView
    * @ForeignKey Workspace
    */

    /* ================================================== */

    @ForeignKey(() => Workspace)
    @Column({ allowNull: false })
    workspace_id: number;

    @BelongsTo(() => Workspace)
    workspace: Workspace;

    @Length({ max: 255 })
    @Column({ allowNull: false })
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