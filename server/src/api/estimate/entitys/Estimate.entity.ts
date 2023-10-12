import { Column, DataType, HasMany, Length, Model, Table } from 'sequelize-typescript';
import { EstimatePoint } from './EstimatePoint.entity';

@Table
export class Estimate extends Model {
    @HasMany(() => EstimatePoint)
    estimate_points: EstimatePoint;

    @Length({ max: 255 })
    @Column({ allowNull: false })
    name: string;

    @Column({ type: DataType.TEXT })
    description: string;
}