import { BelongsTo, Column, ForeignKey, HasOne, Model, Table } from 'sequelize-typescript';
import { Issue } from 'src/api/issue/entitys/Issue.entity';
import { Cycle } from './Cycle.entity';
import sequelize from 'sequelize';

@Table
export class CycleIssue extends Model<CycleIssue> {
    @Column({ type: sequelize.UUID, defaultValue: sequelize.UUIDV4, allowNull: false, primaryKey: true })
    id: string;
    /**
    * !FK
    */

    @ForeignKey(() => Issue)
    @Column({ type: sequelize.UUID, allowNull: true })
    issueId: string;

    @ForeignKey(() => Cycle)
    @Column({ type: sequelize.UUID, allowNull: true })
    cycle_id: string;

    /**
    * ! PR
    */

    @BelongsTo(() => Issue)
    issue: Issue;


    @BelongsTo(() => Cycle)
    cycle: Cycle;
}