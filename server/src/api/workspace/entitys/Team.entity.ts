import { Column, Model, Table, Length, DataType, BelongsToMany, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import { User } from 'src/api/user/entitys/User.entity';
import { TeamMember } from './TeamMember.entity';
import { Workspace } from './Workspace.entity';

@Table
export class Team extends Model {
    /**
    * ! table Team
    * @ForeignKey Workspace
    * @BelongsToMany User[TeamMember]
    */
    /* ================================================== */

    @BelongsToMany(() => User, () => TeamMember)
    members: User[];

    @ForeignKey(() => Workspace)
    @Column({ allowNull: false })
    workspace_id: number;

    @BelongsTo(() => Workspace)
    workspace: Workspace;

    @Column({ allowNull: false })
    name: string;

    @Column({ type: DataType.TEXT })
    description: string;
}