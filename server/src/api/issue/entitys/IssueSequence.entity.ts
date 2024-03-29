import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';

import { Issue } from './Issue.entity';
import sequelize from 'sequelize';

@Table({tableName:'IssueSequences'})
export class IssueSequence extends Model<IssueSequence> {
    @Column({ type: sequelize.UUID, defaultValue: sequelize.UUIDV4, allowNull: false, primaryKey: true })
    id: string;

    @ForeignKey(() => Issue)
    @Column({ type: sequelize.UUID, allowNull: true })
    issue_id: string;

    @BelongsTo(() => Issue)
    issue: Issue[];

    @Column({ type: DataType.BIGINT })
    sequence: number;

    @Column({ defaultValue: false })
    deleted: boolean;
}