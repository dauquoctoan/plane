import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class ProjectBaseModel extends Model{
    @Column
    member: string;
    
    @Column
    comment: string;

    @Column
    role: string;

    @Column
    view_props: string;

    @Column
    default_props: string;

    @Column
    preferences: string;

    @Column
    sort_order: string;
}