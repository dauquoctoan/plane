import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class CycleFavorite extends Model{
    @Column
    user: string;
    
    @Column
    cycle: string;
}