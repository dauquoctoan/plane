import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class IssueReaction extends Model{
    @Column
    actor: string;
    
    @Column
    issue: string;

    @Column
    reaction: string;
}