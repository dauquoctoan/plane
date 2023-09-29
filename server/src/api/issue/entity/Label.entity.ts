import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class IssueBlocker extends Model{
    @Column
    parent: string;
    
    @Column
    name: string;

    @Column
    description: string;

    @Column
    color: string;
}