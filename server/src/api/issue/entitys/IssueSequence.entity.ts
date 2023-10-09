import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';

import { Issue } from './Issue.entity';

@Table
export class IssueSequence extends Model {
    @ForeignKey(() => Issue)
    @Column
    issue: number;

    // @Column({ type: DataType.BIGINT })
    // sequence: number;

    // @Column({ defaultValue: false })
    // deleted: boolean;
}