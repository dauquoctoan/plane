import { BelongsTo, Column, DataType, ForeignKey, Length, Model, Table } from 'sequelize-typescript';
import { Workspace } from './Workspace.entity';
import { User } from 'src/api/user/entitys/User.entity';
import sequelize from 'sequelize';

@Table
export class WorkspaceTheme extends Model {
    /**
    * ! WorkspaceTheme
    * @ForeignKey Workspace, User
    */

    /* ================================================== */

    @ForeignKey(() => Workspace)
    @Column({ allowNull: false })
    workspace_id: number;

    @BelongsTo(() => Workspace)
    workspace: Workspace;

    @ForeignKey(() => User)
    @Column({ allowNull: false, type: sequelize.UUID })
    actor: number;

    @BelongsTo(() => User)
    user: User;

    @Length({ max: 300 })
    @Column({ type: DataType.TEXT })
    name: string;

    @Column({ type: DataType.JSON, defaultValue: {} })
    colors: string;
}