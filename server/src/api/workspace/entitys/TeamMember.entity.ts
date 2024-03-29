import { Column, Model, Table, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Workspace } from './Workspace.entity';
import { Team } from './Team.entity';
import { User } from 'src/api/user/entitys/User.entity';
import sequelize from 'sequelize';

@Table({tableName:'TeamMembers'})
export class TeamMember extends Model<TeamMember> {
    @Column({ type: sequelize.UUID, defaultValue: sequelize.UUIDV4, allowNull: false, primaryKey: true })
    id: string;
    /**
    * ! table TeamMember
    * @ForeignKey Workspace, Team, User;
    */

    @ForeignKey(() => Workspace)
    @Column({ type: sequelize.UUID, allowNull: false })
    workspace_id: string;

    @ForeignKey(() => Team)
    @Column({ type: sequelize.UUID, allowNull: false })
    team_id: string;

    @ForeignKey(() => User)
    @Column({ allowNull: false, type: sequelize.UUID })
    member: string;

    /* ================================================== */

    @BelongsTo(() => Workspace, {foreignKey:'workspace_id'})
    workspace: Workspace;

    @BelongsTo(() => Team, {foreignKey:'team_id'})
    team: Team;

    @BelongsTo(() => User, {foreignKey:'member'})
    memberInfo: User;
}