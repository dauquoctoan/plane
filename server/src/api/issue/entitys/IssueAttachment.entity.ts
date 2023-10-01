import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class IssueAttachment extends Model{
    @Column
    attributes: string;
    
    @Column
    asset: string;

    @Column
    issue: string;
}