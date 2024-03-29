import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Module } from './Module.entity';
import sequelize from 'sequelize';

@Table({tableName:'ModuleLinks'})
export class ModuleLink extends Model<ModuleLink> {
    @Column({ type: sequelize.UUID, defaultValue: sequelize.UUIDV4, allowNull: false, primaryKey: true })
    id: string;

    @ForeignKey(() => Module)
    @Column({ type: sequelize.UUID, allowNull: true })
    module_id: string;

    @BelongsTo(() => Module)
    module: Module;

    @Column
    title: string;

    @Column
    url: string;

    @Column({ type: DataType.JSON, defaultValue: {} })
    metadata: string;
}