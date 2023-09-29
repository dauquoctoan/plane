import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class IssueComment extends Model{
    @Column
    comment_stripped: string;
    
    @Column
    comment_json: string;

    @Column
    comment_html: string;

    @Column
    attachments: string;

    @Column
    issue: string;

    @Column
    actor: string;

    @Column
    access: string;
}