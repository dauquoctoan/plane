import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class IssueActivity extends Model{
    @Column
    issue: string;
    
    @Column
    verb: string;

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

    @Column
    issue_comment: string;

    @Column
    actor: string;

    @Column
    old_identifier: string;

    @Column
    new_identifier: string;
    
    @Column
    epoch: string;
}