import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class ProjectBaseModel extends Model{
    @Column
    project: string;
    
    @Column
    workspace: string;
}