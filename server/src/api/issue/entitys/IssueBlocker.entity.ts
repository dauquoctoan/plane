import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class IssueBlocker extends Model{
    @Column
    block: string;
    
    @Column
    blocked_by: string;
}