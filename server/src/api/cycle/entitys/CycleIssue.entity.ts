import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class CycleIssue extends Model {
    @Column
    issue: string;

    @Column
    cycle: string;
}