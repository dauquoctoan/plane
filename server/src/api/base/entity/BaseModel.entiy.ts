import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class BaseModel extends Model{
    @Column
    id: string;
}