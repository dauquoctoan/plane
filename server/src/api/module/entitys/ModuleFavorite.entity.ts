import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class ModuleFavorite extends Model{
    @Column
    user: string;
    
    @Column
    module: string;
}