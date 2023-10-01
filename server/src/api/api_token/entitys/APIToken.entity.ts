import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class APIToken extends Model{
    @Column
    token: string;
    
    @Column
    label: string;

    @Column
    user: string;
    
    @Column
    user_type: string;

    @Column
    workspace: string;
}