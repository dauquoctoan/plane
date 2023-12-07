import { BelongsTo, Column, ForeignKey, HasMany, Length, Model, Table } from 'sequelize-typescript';
import { User } from 'src/api/user/entitys/User.entity';
import { Issue } from './Issue.entity';
import sequelize from 'sequelize';

@Table
export class IssueReaction extends Model<IssueReaction> {
    @ForeignKey(() => User)
    @Column({ allowNull: false, type: sequelize.UUID })
    actor: string;

    @ForeignKey(() => Issue)
    @Column({ allowNull: false })
    issue_id: number;

    @BelongsTo(() => User, {foreignKey:'actor'})
    User: User[];

    @BelongsTo(() => Issue, {foreignKey:'issue_id'})
    issue: Issue[];

    @Length({ max: 255 })
    @Column
    reaction: string;
}