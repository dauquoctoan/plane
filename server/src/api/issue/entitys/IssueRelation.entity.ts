import { BelongsTo, Column, ForeignKey, Is, Model, Table } from 'sequelize-typescript';
import { Issue } from './Issue.entity';
import { RELATION } from 'src/constants/entity-constant';
import { INVALID_RELATION } from 'src/constants/message-constant';

@Table
export class IssueRelation extends Model<IssueRelation> {
    @ForeignKey(() => Issue)
    @Column
    issue_id: number;

    @BelongsTo(() => Issue)
    issue: Issue;

    @ForeignKey(() => Issue)
    @Column
    related_issue_id: number;

    @BelongsTo(() => Issue)
    related_issue: Issue;

    @Is('relation_type', (value) => {
        if (!RELATION.includes(value)) throw Error(INVALID_RELATION)
    })
    @Column
    relation_type: string;
}