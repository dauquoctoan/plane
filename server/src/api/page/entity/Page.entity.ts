import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Page extends Model{
    @Column
    name: string;
    
    @Column
    description: string;

    @Column
    description_html: string;
    
    @Column
    description_stripped: string;
    
    @Column
    owned_by: string;
    
    @Column
    access: string;

    @Column
    color: string;

    @Column
    labels: string;
}