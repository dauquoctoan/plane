import { Column, DataType, ForeignKey, Length, Model, Table } from 'sequelize-typescript';
import { Issue } from './Issue.entity';

@Table
export class IssueLink extends Model {
    @ForeignKey(() => Issue)
    @Column
    issue: number;

    @Length({ max: 255 })
    @Column
    title: string;

    @Column
    url: string;

    @Column({ type: DataType.JSON, defaultValue: {} })
    metadata: string;
}