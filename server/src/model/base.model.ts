import {AutoIncrement, Column, Model, PrimaryKey, Table} from 'sequelize-typescript';


@Table
export class BaseModel extends Model {
    @Column({})
    ID: bigint
}