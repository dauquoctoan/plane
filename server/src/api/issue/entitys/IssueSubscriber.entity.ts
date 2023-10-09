import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Issue } from './Issue.entity';
import { User } from 'src/api/user/entitys/User.entity';

@Table
export class IssueSubscriber extends Model {
    @ForeignKey(() => Issue)
    @Column({ allowNull: false })
    issue: number;

    @ForeignKey(() => User)
    @Column({ allowNull: false })
    subscriber: string;
}