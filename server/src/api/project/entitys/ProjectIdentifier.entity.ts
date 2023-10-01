import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class ProjectIdentifier extends Model{
    @Column
    workspace: string;
    
    @Column
    project: string;

    @Column
    name: string;
}