import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Cycle extends Model {
    @Column
    name: string;

    @Column
    description: string;

    @Column
    start_date: string;

    @Column
    end_date: string;

    @Column
    owned_by: string;

    @Column
    view_props: string;

    @Column
    sort_order: string;
}