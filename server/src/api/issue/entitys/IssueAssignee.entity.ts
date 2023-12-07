import { BelongsTo, Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Issue } from './Issue.entity';
import { User } from 'src/api/user/entitys/User.entity';
import sequelize from 'sequelize';

@Table
export class IssueAssignee extends Model<IssueAssignee> {
    @ForeignKey(() => Issue)
    @Column
    issue_id: number;

    @ForeignKey(() => User)
    @Column({ type: sequelize.UUID })
    assignee: string;
}