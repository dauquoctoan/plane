import { BelongsTo, Column, DataType, ForeignKey, HasMany, Is, Length, Model, Table } from 'sequelize-typescript';
import { Estimate } from './Estimate.entity';
import sequelize from 'sequelize';
import { Issue } from 'src/api/issue/entitys/Issue.entity';

@Table({tableName:'EstimatePoints'})
export class EstimatePoint extends Model<EstimatePoint> {
    @Column({ type: sequelize.UUID, defaultValue: sequelize.UUIDV4, allowNull: false, primaryKey: true })
    id: string;
    /**
    * !FK
    */

    @ForeignKey(() => Estimate)
    @Column({ type: sequelize.UUID })
    estimate_id: string;

    /**
    * ! RELATIONSHIP
    */

    @BelongsTo(() => Estimate)
    estimate: Estimate;

    @HasMany(() => Issue,{
        onUpdate: "CASCADE",
        onDelete: "CASCADE", 
        foreignKey: 'estimate_point_id'
    })
    issues: Issue[];

    /**
    * ! PR
    */

    @Is('key', (value) => {
        if (value > 7 && value < 0) throw Error('The key type must be 0 <= key <= 7');
    })
    @Column
    key: number;

    @Column({ type: DataType.TEXT })
    description: string;

    @Length({ max: 20 })
    @Column({ allowNull: false })
    value: string;
}