import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Importer extends Model{
    @Column
    service: string;
    
    @Column
    status: string;

    @Column
    initiated_by: string;
    
    @Column
    metadata: string;

    @Column
    config: string;
    
    @Column
    data: string;

    @Column
    token: string;
    
    @Column
    imported_data: string;
}