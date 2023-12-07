import { Column, Model, Table, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Workspace } from './Workspace.entity';
import { Team } from './Team.entity';
import { User } from 'src/api/user/entitys/User.entity';
import sequelize from 'sequelize';

@Table
export class TeamMember extends Model<TeamMember> {
    /**
    * ! table TeamMember
    * @ForeignKey Workspace, Team, User;
    */

    @ForeignKey(() => Workspace)
    @Column({ allowNull: false })
    workspace_id: number;

    @ForeignKey(() => Team)
    @Column({ allowNull: false })
    team_id: number;

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