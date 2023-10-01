import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class IssueLink extends Model{
    @Column
    title: string;
    
    @Column
    url: string;

    @Column
    issue: string;
    
    @Column
    metadata: string;
}