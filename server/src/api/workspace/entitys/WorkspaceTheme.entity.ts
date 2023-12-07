import { BelongsTo, Column, DataType, ForeignKey, Length, Model, Table } from 'sequelize-typescript';
import { Workspace } from './Workspace.entity';
import { User } from 'src/api/user/entitys/User.entity';
import sequelize from 'sequelize';

@Table
export class WorkspaceTheme extends Model<WorkspaceTheme> {
    /**
    * ! WorkspaceTheme
    * @ForeignKey Workspace, User
    */

    @ForeignKey(() => Workspace)
    @Column({ allowNull: false })
    workspace_id: number;

    @ForeignKey(() => User)
    @Column({ allowNull: false, type: sequelize.UUID })
    actor: number;

    /* ================================================== */

    @BelongsTo(() => Workspace,{foreignKey: 'workspace_id'})
    workspace: Workspace;

    @BelongsTo(() => User, {foreignKey:'actor'})
    user: User;

    @Length({ max: 300 })
    @Column({ type: DataType.TEXT })
    name: string;

    @Column({ type: DataType.JSON, defaultValue: {} })
    colors: string;
}