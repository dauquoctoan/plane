import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Issue } from './Issue.entity';

@Table
export class IssueAttachment extends Model {
    /**
    * ! FK
    */

    @ForeignKey(() => Issue)
    @Column({ allowNull: false })
    issue_id: number;

    /**
    * ! RELATIONSHIP
    */

    @BelongsTo(() => Issue)
    issue: Issue;

    /**
    * ! PR
    */

    @Column({ defaultValue: {}, type: DataType.JSON })
    attributes: string;

    @Column({ allowNull: false })
    asset: string;
}