import { BelongsTo, Column, ForeignKey, HasOne, Model, Table } from 'sequelize-typescript';
import { Issue } from 'src/api/issue/entitys/Issue.entity';
import { Cycle } from './Cycle.entity';

@Table
export class CycleIssue extends Model {
    // @BelongsTo(() => Issue)
    // @Column
    // issue: number;

    @ForeignKey(() => Cycle)
    @Column
    cycle: number;
}