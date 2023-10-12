import { BelongsTo, Column, ForeignKey, Length, Model, Table } from 'sequelize-typescript';
import { Issue } from './Issue.entity';
import { IssueComment } from './IssueComment.entity';
import { User } from 'src/api/user/entitys/User.entity';
import sequelize from 'sequelize';

@Table
export class IssueActivity extends Model {
    @ForeignKey((() => IssueComment))
    @Column
    issue_comment_id: number;

    @BelongsTo(() => IssueComment)
    issue_comment: IssueComment;

    @ForeignKey(() => User)
    @Column
    actor: string;
    //thieu

    @ForeignKey(() => Issue)
    @Column
    issue_id: number;

    @BelongsTo(() => Issue)
    issue: Issue;

    @Length({ max: 255 })
    @Column({ defaultValue: "created" })
    verb: string;

    @Length({ max: 255 })
    @Column
    field: string;

    @Column
    old_value: string;

    @Column
    new_value: string;

    @Column
    comment: string;

    @Column
    attachments: string;

    @Column({ type: sequelize.UUID })
    old_identifier: string;

    @Column({ type: sequelize.UUID })
    new_identifier: string;

    @Column
    epoch: number;
}