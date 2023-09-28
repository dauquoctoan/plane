import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class ProjectFavorite extends Model{
    @Column
    user: string;
}