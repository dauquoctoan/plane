import { BelongsTo, Column, DataType, ForeignKey, Is, Model, Table } from 'sequelize-typescript';
import { Inbox } from './Inbox.entiy';
import { Issue } from 'src/api/issue/entitys/Issue.entity';
import { ISSUE_STATUS } from 'src/constants/entity-constant';
import { INVALID_ISSUE_STATUS } from 'src/constants/message-constant';

@Table
export class InboxIssue extends Model<InboxIssue> {
    /**
    * !FK
    */

    @ForeignKey(() => Issue)
    @Column({ allowNull: false })
    issue_id: number;

    @ForeignKey(() => Inbox)
    @Column({ allowNull: false })
    inbox_id: number;

    @ForeignKey(() => Issue)
    @Column
    id_issue_duplicate_to: number;

    /**
    * ! RELATIONSHIP
    */

    @BelongsTo(() => Inbox)
    inbox: Inbox;

    @BelongsTo(() => Issue)
    issue: Issue;


    @BelongsTo(() => Issue)
    duplicate_to: Issue;

    /**
    * ! PR
    */

    @Is('status', (value) => {
        if (!ISSUE_STATUS.includes(value)) throw Error(INVALID_ISSUE_STATUS)
    })
    @Column({ defaultValue: -2 })
    status: number;

    @Column
    snoozed_till: Date;

    @Column({ type: DataType.TEXT })
    source: string;
}