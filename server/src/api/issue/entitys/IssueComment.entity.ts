import { BelongsTo, Column, DataType, ForeignKey, HasMany, Is, Model, Table } from 'sequelize-typescript';
import { Issue } from './Issue.entity';
import { User } from 'src/api/user/entitys/User.entity';
import { ISSUE_ACCESS } from 'src/constants/entity-constant';
import { INVALID_ISSUE_ACCESS } from 'src/constants/message-constant';
import { IssueActivity } from './IssueActivity.entity';

@Table
export class IssueComment extends Model {
    @HasMany(() => IssueActivity)
    issueActivitys: IssueActivity[];

    @ForeignKey(() => Issue)
    @Column
    issue_id: number;

    @BelongsTo(() => Issue)
    issue: Issue;

    @ForeignKey(() => User)
    @Column
    actor: string;
    //thieu

    @Column
    comment_stripped: string;

    @Column({ defaultValue: {}, type: DataType.JSON })
    comment_json: string;

    @Column({ defaultValue: '<p></p>' })
    comment_html: string;

    @Column
    attachments: string;

    @Is('access', (value) => {
        if (!ISSUE_ACCESS.includes(value)) throw Error(INVALID_ISSUE_ACCESS)
    })
    @Column
    access: string;
}