import { Column, ForeignKey, Length, Model, Table } from 'sequelize-typescript';
import { User } from 'src/api/user/entitys/User.entity';
import { Issue } from './Issue.entity';

@Table
export class IssueReaction extends Model {
    @ForeignKey(() => User)
    @Column({ allowNull: false })
    actor: string;

    @ForeignKey(() => Issue)
    @Column({ allowNull: false })
    issue: number;

    // @Length({ max: 255 })
    // @Column
    // reaction: string;
}