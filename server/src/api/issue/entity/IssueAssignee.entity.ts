import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class IssueAssignee extends Model{
    @Column
    issue: string;
    
    @Column
    assignee: string;
}