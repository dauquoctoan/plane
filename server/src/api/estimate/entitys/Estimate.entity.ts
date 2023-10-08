import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Estimate extends Model {
    @Column
    name: string;

    @Column
    description: string;
}