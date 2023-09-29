import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Module extends Model{
    @Column
    module: string;
    
    @Column
    issue: string;
}