import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class ProjectDeployBoard extends Model{
    @Column
    anchor: string;
    
    @Column
    comments: string;

    @Column
    reactions: string;

    @Column
    inbox: string;

    @Column
    votes: string;

    @Column
    views: string;
}