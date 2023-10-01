import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class ExporterHistory extends Model{
    @Column
    workspace: string;
    
    @Column
    project: string;

    @Column
    provider: string;
    
    @Column
    status: string;

    @Column
    reason: string;
    
    @Column
    key: string;

    @Column
    url: string;
    
    @Column
    token: string;

    @Column
    initiated_by: string;
}