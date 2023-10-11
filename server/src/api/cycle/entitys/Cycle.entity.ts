import { Column, DataType, ForeignKey, Length, Model, Table } from 'sequelize-typescript';
import { User } from 'src/api/user/entitys/User.entity';

@Table
export class Cycle extends Model {
    @Length({ max: 255 })
    @Column({ allowNull: false })
    name: string;

    @ForeignKey(() => User)
    @Column({ allowNull: false })
    owned_by: string;

    @Column({ type: DataType.TEXT })
    description: string;

    @Column
    start_date: Date;

    @Column
    end_date: Date;

    @Column({ type: DataType.JSON, defaultValue: {} })
    view_props: string;

    @Column({ defaultValue: 65535, type: DataType.FLOAT })
    sort_order: number;
}