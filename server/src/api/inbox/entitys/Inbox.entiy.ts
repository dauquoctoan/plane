import { Column, DataType, HasMany, Length, Model, Table } from 'sequelize-typescript';
import { InboxIssue } from './InboxIssue.entity';

@Table
export class Inbox extends Model {
    @HasMany(() => InboxIssue)
    inbox_issues: InboxIssue[];

    @Length({ max: 255 })
    @Column
    name: string;

    @Column({ type: DataType.TEXT })
    description: string;

    @Column({ defaultValue: false })
    is_default: boolean;

    @Column({ type: DataType.JSON, defaultValue: {} })
    view_props: string;
}