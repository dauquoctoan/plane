import { BelongsTo, Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Issue } from './Issue.entity';
import { Label } from './Label.entity';
import sequelize from 'sequelize';

@Table({tableName:'IssueLabel'})
export class IssueLabel extends Model<IssueLabel> {
    @ForeignKey(() => Issue)
    @Column({ type: sequelize.UUID, allowNull: true })
    issue_id: string;

    @ForeignKey(() => Label)
    @Column({ type: sequelize.UUID, allowNull: true })
    label_id: string;
}