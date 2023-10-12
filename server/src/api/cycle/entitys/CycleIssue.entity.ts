import { BelongsTo, Column, ForeignKey, HasOne, Model, Table } from 'sequelize-typescript';
import { Issue } from 'src/api/issue/entitys/Issue.entity';
import { Cycle } from './Cycle.entity';

@Table
export class CycleIssue extends Model {
    @ForeignKey(() => Issue)
    @Column({ allowNull: false })
    issueId: number;

    @BelongsTo(() => Issue)
    issue: Issue;

    @ForeignKey(() => Cycle)
    @Column
    cycle_id: number;

    @BelongsTo(() => Cycle)
    cycle: Cycle;
}