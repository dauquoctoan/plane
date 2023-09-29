import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class ModuleMember extends Model{
    @Column
    module: string;
    
    @Column
    member: string;
}