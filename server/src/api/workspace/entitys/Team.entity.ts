import { Column, Model, Table, Length, DataType, BelongsToMany, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import { User } from 'src/api/user/entitys/User.entity';
import { TeamMember } from './TeamMember.entity';
import { Workspace } from './Workspace.entity';
import sequelize from 'sequelize';

@Table
export class Team extends Model<Team> {
    @Column({ type: sequelize.UUID, defaultValue: sequelize.UUIDV4, allowNull: false, primaryKey: true })
    id: string;
    /**
    * ! table Team
    * @ForeignKey Workspace
    * @BelongsToMany User[TeamMember]
    */
    @ForeignKey(() => Workspace)
    @Column({ type: sequelize.UUID, allowNull: false })
    workspace_id: string;

    /* ================================================== */

    @BelongsToMany(() => User, () => TeamMember)
    members: User[];

    @BelongsTo(() => Workspace, {foreignKey:'workspace_id'})
    workspace: Workspace;

    @Column({ allowNull: false })
    name: string;

    @Column({ type: DataType.TEXT })
    description: string;
}