import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Issue } from './Issue.entity';
import { Label } from './Label.entity';

@Table
export class IssueLabel extends Model {
    @ForeignKey(() => Issue)
    @Column({ allowNull: false })
    issue: number;

    @ForeignKey(() => Label)
    @Column({ allowNull: false })
    label: number;
}