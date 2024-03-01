import { BelongsTo, Column, ForeignKey, HasMany, Length, Model, Table } from 'sequelize-typescript';
import { User } from 'src/api/user/entitys/User.entity';
import { Issue } from './Issue.entity';
import sequelize from 'sequelize';

@Table
export class IssueReaction extends Model<IssueReaction> {
    @Column({ type: sequelize.UUID, defaultValue: sequelize.UUIDV4, allowNull: false, primaryKey: true })
    id: string;

    @ForeignKey(() => User)
    @Column({ type: sequelize.UUID, allowNull: false })
    actor: string;

    @ForeignKey(() => Issue)
    @Column({ type: sequelize.UUID, allowNull: false })
    issue_id: string;

    @BelongsTo(() => User, {foreignKey:'actor'})
    user: User[];

    @BelongsTo(() => Issue, {foreignKey:'issue_id'})
    issue: Issue[];

    @Length({ max: 255 })
    @Column
    reaction: string;
}