import { Column, DataType, ForeignKey, Length, Model, Table } from 'sequelize-typescript';
import { Workspace } from './Workspace.entity';
import { User } from 'src/api/user/entitys/User.entity';

@Table
export class WorkspaceTheme extends Model {
    @ForeignKey(() => Workspace)
    @Column({ allowNull: false })
    workspace: number;

    @ForeignKey(() => User)
    @Column({ allowNull: false })
    actor: number;

    @Length({ max: 300 })
    @Column({ type: DataType.TEXT })
    name: string;

    @Column({ type: DataType.JSON, defaultValue: {} })
    colors: string;
}