import { Column, DataType, Length, Model, Table } from 'sequelize-typescript';

@Table
export class Estimate extends Model {
    @Length({ max: 255 })
    @Column({ allowNull: false })
    name: string;

    @Column({ type: DataType.TEXT })
    description: string;
}