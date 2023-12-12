import { BelongsTo, Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Issue } from './Issue.entity';
import { User } from 'src/api/user/entitys/User.entity';
import sequelize from 'sequelize';

@Table
export class IssueAssignee extends Model<IssueAssignee> {;
    @ForeignKey(() => Issue)
    @Column({ type: sequelize.UUID, allowNull: true })
    issue_id: string;

    @ForeignKey(() => User)
    @Column({ type: sequelize.UUID, allowNull: true })
    assignee: string;
}