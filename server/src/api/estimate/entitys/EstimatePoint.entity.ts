import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class EstimatePoint extends Model {
    @Column
    estimate: string;

    @Column
    key: string;

    @Column
    description: string;

    @Column
    value: string;
}