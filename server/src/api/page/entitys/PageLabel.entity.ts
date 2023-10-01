import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class PageLabel extends Model{
    @Column
    label: string;
    
    @Column
    page: string;
}