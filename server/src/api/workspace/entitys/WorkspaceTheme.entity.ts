import { BelongsTo, Column, DataType, ForeignKey, Length, Model, Table } from 'sequelize-typescript';
import { Workspace } from './Workspace.entity';
import { User } from 'src/api/user/entitys/User.entity';
import sequelize from 'sequelize';

@Table({tableName:'WorkspaceThemes'})
export class WorkspaceTheme extends Model<WorkspaceTheme> {
    @Column({ type: sequelize.UUID, defaultValue: sequelize.UUIDV4, allowNull: false, primaryKey: true })
    id: string;
    /**
    * ! WorkspaceTheme
    * @ForeignKey Workspace, User
    */

    @ForeignKey(() => Workspace)
    @Column({ type: sequelize.UUID, allowNull: false })
    workspace_id: string;

    @ForeignKey(() => User)
    @Column({ allowNull: false, type: sequelize.UUID })
    actor: string;

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