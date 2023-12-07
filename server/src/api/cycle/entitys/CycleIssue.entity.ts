import { BelongsTo, Column, ForeignKey, HasOne, Model, Table } from 'sequelize-typescript';
import { Issue } from 'src/api/issue/entitys/Issue.entity';
import { Cycle } from './Cycle.entity';

@Table
export class CycleIssue extends Model<CycleIssue> {
    /**
    * !FK
    */

    @ForeignKey(() => Issue)
    @Column({ allowNull: false })
    issueId: number;

    @ForeignKey(() => Cycle)
    @Column
    cycle_id: number;

    /**
    * ! PR
    */

    @BelongsTo(() => Issue)
    issue: Issue;


    @BelongsTo(() => Cycle)
    cycle: Cycle;
}