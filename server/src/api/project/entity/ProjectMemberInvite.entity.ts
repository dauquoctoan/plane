import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class ProjectBaseModel extends Model{
    @Column
    email: string;
    
    @Column
    accepted: string;

    @Column
    token: string;
    
    @Column
    message: string;
    
    @Column
    responded_at: string;
    
    @Column
    role: string;
}