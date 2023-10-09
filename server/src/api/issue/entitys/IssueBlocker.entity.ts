import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Issue } from './Issue.entity';

@Table
export class IssueBlocker extends Model {
    @ForeignKey(() => Issue)
    @Column
    block: string;

    @ForeignKey(() => Issue)
    @Column
    blocked_by: string;
}