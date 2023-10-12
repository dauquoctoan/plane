import sequelize from 'sequelize';
import { Column, ForeignKey, HasMany, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { Estimate } from 'src/api/estimate/entitys/Estimate.entity';
import { Test } from 'src/api/test/entities/test.entity';

@Table
export class Test1 extends Model {
    // @Column({ type: sequelize.UUID, defaultValue: sequelize.UUIDV4, primaryKey: true })
    // id: string;

    // @HasMany(() => Test)
    // tests: Test[];
}