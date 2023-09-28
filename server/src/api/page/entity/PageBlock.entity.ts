import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Page extends Model{
    @Column
    page: string;
    
    @Column
    name: string;

    @Column
    description: string;
    
    @Column
    description_html: string;
    
    @Column
    description_stripped: string;
    
    @Column
    issue: string;

    @Column
    completed_at: string;

    @Column
    sort_order: string;

    @Column
    sync: string;
}