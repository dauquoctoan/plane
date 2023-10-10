import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Issue } from './Issue.entity';

@Table
export class IssueAttachment extends Model {
    @ForeignKey(() => Issue)
    @Column({ allowNull: false })
    issue: number;

    @Column({ defaultValue: {}, type: DataType.JSON })
    attributes: string;

    @Column({ allowNull: false })
    asset: string;
}