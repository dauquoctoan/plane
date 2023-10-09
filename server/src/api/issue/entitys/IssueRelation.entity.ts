import { Column, ForeignKey, Is, Model, Table } from 'sequelize-typescript';
import { Issue } from './Issue.entity';
import { RELATION } from 'src/constants/entity-constant';
import { INVALID_RELATION } from 'src/constants/message-constant';

@Table
export class IssueRelation extends Model {
    @ForeignKey(() => Issue)
    @Column
    issue: number;

    @ForeignKey(() => Issue)
    @Column
    related_issue: number;

    // @Is('relation_type', (value) => {
    //     if (!RELATION.includes(value)) throw Error(INVALID_RELATION)
    // })
    // @Column
    // relation_type: string;
}