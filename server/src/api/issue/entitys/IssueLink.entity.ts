import { BelongsTo, Column, DataType, ForeignKey, Length, Model, Table } from 'sequelize-typescript';
import { Issue } from './Issue.entity';

@Table
export class IssueLink extends Model<IssueLink> {
    /**
    * ! FK
    */
    @ForeignKey(() => Issue)
    @Column
    issue_id: number;

    /**
    * ! RELATIONSHIP
    */

    @BelongsTo(() => Issue)
    issue: Issue;

    @Length({ max: 255 })
    @Column
    title: string;

    @Column
    url: string;

    @Column({ type: DataType.JSON, defaultValue: {} })
    metadata: string;
}