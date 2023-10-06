import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Inbox } from './Inbox.entiy';

@Table
export class InboxIssue extends Model {
    @ForeignKey(() => Inbox)
    @Column({ allowNull: false })
    inbox: string;

    @Column
    issue: string;

    @Column
    status: string;

    @Column
    snoozed_till: string;

    @Column
    duplicate_to: string;

    @Column
    source: string;
}