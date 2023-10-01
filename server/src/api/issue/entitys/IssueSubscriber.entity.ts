import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class IssueSubscriber extends Model{
    @Column
    issue: string;
    
    @Column
    subscriber: string;
}