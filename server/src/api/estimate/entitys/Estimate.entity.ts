import { Column, DataType, HasMany, Length, Model, Table } from 'sequelize-typescript';
import { EstimatePoint } from './EstimatePoint.entity';
import { Project } from 'src/api/project/entitys/Project.entity';

@Table
export class Estimate extends Model<Estimate> {
    /**
    * ! RELATIONSHIP
    */
    @HasMany(() => EstimatePoint)
    estimate_points: EstimatePoint[];

    @HasMany(() => Project)
    projects: Project[];

    /**
    * ! PR
    */

    @Length({ max: 255 })
    @Column({ allowNull: false })
    name: string;

    @Column({ type: DataType.TEXT })
    description: string;
}