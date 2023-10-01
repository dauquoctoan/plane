import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Inbox extends Model{
    @Column
    name: string;
    
    @Column
    description: string;

    @Column
    is_default: string;
    
    @Column
    view_props: string;
}