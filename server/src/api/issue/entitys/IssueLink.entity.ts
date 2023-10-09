import { Column, DataType, ForeignKey, Length, Model, Table } from 'sequelize-typescript';
import { Issue } from './Issue.entity';

@Table
export class IssueLink extends Model {
    @Length({ max: 255 })
    @Column
    title: string;

    @Column
    url: string;

    @ForeignKey(() => Issue)
    @Column
    issue: number;

    @Column({ type: DataType.JSON, defaultValue: {} })
    metadata: string;
}