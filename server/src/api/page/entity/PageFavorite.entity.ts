import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class PageFavorite extends Model{
    @Column
    user: string;
    
    @Column
    page: string;
}