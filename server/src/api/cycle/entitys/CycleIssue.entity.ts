import { BelongsTo, Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Issue } from 'src/api/issue/entitys/Issue.entity';
import { Cycle } from './Cycle.entity';
import sequelize from 'sequelize';

@Table({tableName:'CycleIssues'})
export class CycleIssue extends Model<CycleIssue> {
    @Column({ type: sequelize.UUID, defaultValue: sequelize.UUIDV4, allowNull: false, primaryKey: true })
    id: string;
    
    /**
    * !FK
    */

    @ForeignKey(() => Issue)
    @Column({ type: sequelize.UUID })
    issue_id: string;

    @ForeignKey(() => Cycle)
    @Column({ type: sequelize.UUID })
    cycle_id: string;

    /**
    * ! PR
    */

    @BelongsTo(() => Issue, { foreignKey: 'issue_id'})
    issue: Issue;

    @BelongsTo(() => Cycle, { foreignKey: 'cycle_id'})
    cycle: Cycle;
}