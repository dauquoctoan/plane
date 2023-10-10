import { Column, DataType, ForeignKey, Is, Model, Table } from 'sequelize-typescript';
import { Issue } from './Issue.entity';
import { User } from 'src/api/user/entitys/User.entity';
import { ISSUE_ACCESS } from 'src/constants/entity-constant';
import { INVALID_ISSUE_ACCESS } from 'src/constants/message-constant';

@Table
export class IssueComment extends Model {
    @ForeignKey(() => Issue)
    @Column
    issue: number;

    @ForeignKey(() => User)
    @Column
    actor: string;

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