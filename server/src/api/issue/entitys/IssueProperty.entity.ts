import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class IssueProperty extends Model{
    @Column
    user: string;
    
    @Column
    properties: string;
}