import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Module extends Model{
    @Column
    name: string;
    
    @Column
    description: string;

    @Column
    description_text: string;
    
    @Column
    description_html: string;
    
    @Column
    start_date: string;
    
    @Column
    target_date: string;

    @Column
    status: string;

    @Column
    lead: string;

    @Column
    members: string;

    @Column
    view_props: string;

    @Column
    sort_order: string;
}