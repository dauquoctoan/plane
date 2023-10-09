import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Issue } from './Issue.entity';
import { User } from 'src/api/user/entitys/User.entity';

@Table
export class IssueAssignee extends Model {
    @ForeignKey(() => Issue)
    @Column
    issue: string;

    @ForeignKey(() => User)
    @Column
    assignee: string;
}