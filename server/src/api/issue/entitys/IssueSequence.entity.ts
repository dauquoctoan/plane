import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';

import { Issue } from './Issue.entity';

@Table
export class IssueSequence extends Model<IssueSequence> {
    @ForeignKey(() => Issue)
    @Column
    issue_id: number;

    @BelongsTo(() => Issue)
    issue: Issue[];

    @Column({ type: DataType.BIGINT })
    sequence: number;

    @Column({ defaultValue: false })
    deleted: boolean;
}