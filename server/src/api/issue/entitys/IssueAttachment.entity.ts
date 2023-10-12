import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Issue } from './Issue.entity';

@Table
export class IssueAttachment extends Model {
    @ForeignKey(() => Issue)
    @Column({ allowNull: false })
    issue_id: number;

    @BelongsTo(() => Issue)
    issue: Issue;

    @Column({ defaultValue: {}, type: DataType.JSON })
    attributes: string;

    @Column({ allowNull: false })
    asset: string;
}