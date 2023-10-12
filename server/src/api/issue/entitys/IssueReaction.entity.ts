import { BelongsTo, Column, ForeignKey, HasMany, Length, Model, Table } from 'sequelize-typescript';
import { User } from 'src/api/user/entitys/User.entity';
import { Issue } from './Issue.entity';

@Table
export class IssueReaction extends Model {
    @ForeignKey(() => User)
    @Column({ allowNull: false })
    actor: string;
    //thieu

    @ForeignKey(() => Issue)
    @Column({ allowNull: false })
    issue_id: number;

    @BelongsTo(() => Issue)
    issue: Issue[];

    @Length({ max: 255 })
    @Column
    reaction: string;
}