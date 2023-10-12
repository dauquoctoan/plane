import { BelongsTo, Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Issue } from './Issue.entity';

@Table
export class IssueBlocker extends Model {
    @ForeignKey(() => Issue)
    @Column
    block: number;

    @BelongsTo(() => Issue)
    issue_block: Issue;

    @ForeignKey(() => Issue)
    @Column
    blocked_by: number;

    @BelongsTo(() => Issue)
    issue_blocked_by: Issue;
}