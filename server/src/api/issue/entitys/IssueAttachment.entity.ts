import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Issue } from './Issue.entity';

@Table
export class IssueAttachment extends Model {
    @Column({ defaultValue: {}, type: DataType.JSON })
    attributes: string;

    @Column({ allowNull: false })
    asset: string;

    @ForeignKey(() => Issue)
    @Column({ allowNull: false })
    issue: string;
}