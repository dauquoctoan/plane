import { BelongsTo, Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Issue } from './Issue.entity';
import { User } from 'src/api/user/entitys/User.entity';
import sequelize from 'sequelize';

@Table
export class IssueSubscriber extends Model<IssueSubscriber> {
    @ForeignKey(() => Issue)
    @Column({ type: sequelize.UUID, allowNull: true })
    issue_id: string;

    @ForeignKey(() => User)
    @Column({ allowNull: false, type: sequelize.UUID })
    subscriber: string;

    @BelongsTo(() => Issue,{foreignKey: 'issue_id'})
    issue: Issue;

    @BelongsTo(() => User,{foreignKey: 'subscriber'})
    user: User;
}