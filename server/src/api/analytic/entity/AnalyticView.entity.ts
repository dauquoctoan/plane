import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class AnalyticView extends Model{
    @Column
    workspace: string;
    
    @Column
    name: string;

    @Column
    description: string;
    
    @Column
    query: string;

    @Column
    query_dict: string;
}