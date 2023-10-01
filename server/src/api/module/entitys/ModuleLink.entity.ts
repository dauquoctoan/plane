import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class ModuleLink extends Model{
    @Column
    title: string;
    
    @Column
    url: string;

    @Column
    module: string;

    @Column
    metadata: string;
}