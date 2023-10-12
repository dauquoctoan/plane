import { BelongsTo, Column, DataType, ForeignKey, Length, Model, Table } from 'sequelize-typescript';
import { Workspace } from './Workspace.entity';
import { User } from 'src/api/user/entitys/User.entity';

@Table
export class WorkspaceTheme extends Model {
    @ForeignKey(() => Workspace)
    @Column({ allowNull: false })
    workspace_id: number;

    @BelongsTo(() => Workspace)
    workspace: Workspace;

    @ForeignKey(() => User)
    @Column({ allowNull: false })
    actor: number;
    //thieu

    // @BelongsTo(() => User)
    // user: User;

    @Length({ max: 300 })
    @Column({ type: DataType.TEXT })
    name: string;

    @Column({ type: DataType.JSON, defaultValue: {} })
    colors: string;
}