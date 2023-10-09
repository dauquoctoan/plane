import { Column, DataType, ForeignKey, Is, Length, Model, Table } from 'sequelize-typescript';
import { Estimate } from './Estimate.entity';

@Table
export class EstimatePoint extends Model {
    @ForeignKey(() => Estimate)
    @Column({ allowNull: false })
    estimate: number;

    // @Is('key', (value) => {
    //     if (value > 7 && value < 0) throw Error('The key type must be 0 <= key <= 7');
    // })
    // @Column
    // key: number;

    // @Column({ type: DataType.TEXT })
    // description: string;

    // @Length({ max: 20 })
    // @Column({ allowNull: false })
    // value: string;
}