import { Column, Model, Table, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Workspace } from './Workspace.entity';
import { Team } from './Team.entity';
import { User } from 'src/api/user/entitys/User.entity';
import sequelize from 'sequelize';

@Table
export class TeamMember extends Model {
    /**
    * ! table TeamMember
    * @ForeignKey Workspace, Team, User;
    */

    /* ================================================== */

    @ForeignKey(() => Workspace)
    @Column({ allowNull: false })
    workspace: number;

    @BelongsTo(() => Workspace)
    workspace_id: Workspace;

    @ForeignKey(() => Team)
    @Column({ allowNull: false })
    team_id: number;

    @BelongsTo(() => Team)
    team: Team;

    @ForeignKey(() => User)
    @Column({ allowNull: false, type: sequelize.UUID })
    member: string;

    @BelongsTo(() => User)
    user: User;
}