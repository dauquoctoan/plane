import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class ModuleIssue extends Model {
    @Column
    module: string;

    @Column
    issue: string;
}