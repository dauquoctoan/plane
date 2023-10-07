import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class IssueLabel extends Model {
    @Column
    issue: string;

    @Column
    sequence: string;

    @Column
    deleted: string;
}