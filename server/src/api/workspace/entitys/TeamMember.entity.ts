import { Column, Model, Table, ForeignKey } from 'sequelize-typescript';
import { Workspace } from './Workspace.entity';
import { Team } from './Team.entity';
import { User } from 'src/api/user/entitys/User.entity';

@Table
export class TeamMember extends Model {
    @ForeignKey(() => Workspace)
    @Column({ allowNull: false })
    workspace: number;

    @ForeignKey(() => Team)
    @Column({ allowNull: false })
    team: number;

    @ForeignKey(() => User)
    @Column({ allowNull: false })
    member: string;
}