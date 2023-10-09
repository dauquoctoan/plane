import { Column, DataType, Length, Model, Table } from 'sequelize-typescript';

@Table
export class Inbox extends Model {
    @Length({ max: 255 })
    @Column
    name: string;

    @Column({ type: DataType.TEXT })
    description: string;

    @Column({ defaultValue: false })
    is_default: boolean;

    @Column({ type: DataType.JSON, defaultValue: {} })
    view_props: string;
}