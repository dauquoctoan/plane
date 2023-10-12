import { BelongsTo, Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Issue } from './Issue.entity';

@Table
export class IssueBlocker extends Model {
    /**
    * ! FK
    */
    @ForeignKey(() => Issue)
    @Column
    block: number;

    @ForeignKey(() => Issue)
    @Column
    blocked_by: number;

    /**
    * ! RELATIONSHIP
    */

    @BelongsTo(() => Issue)
    issue_block: Issue;

    @BelongsTo(() => Issue)
    issue_blocked_by: Issue;
}