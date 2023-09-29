import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Issue extends Model{
    @Column
    issue: string;
    
    @Column
    actor: string;

    @Column
    vote: string;
}