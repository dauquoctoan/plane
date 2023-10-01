import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { Optional } from 'sequelize';


@Table
export class BaseModel extends Model{
    @Column({autoIncrement: true, allowNull:false, primaryKey: true, type: DataType.BIGINT})
    id: number;
}