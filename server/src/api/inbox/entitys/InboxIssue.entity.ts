import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class InboxIssue extends Model{
    @Column
    inbox: string;
    
    @Column
    issue: string;

    @Column
    status: string;
    
    @Column
    snoozed_till: string;
        
    @Column
    duplicate_to: string;
        
    @Column
    source: string;
}