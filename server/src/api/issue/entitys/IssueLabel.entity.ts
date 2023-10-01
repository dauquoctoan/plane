import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class IssueSequence extends Model{
    @Column
    issue: string;
    
    @Column
    sequence: string;

    @Column
    deleted: string;
}