import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Module } from './Module.entity';

@Table
export class ModuleLink extends Model {
    @Column
    title: string;

    @Column
    url: string;

    @ForeignKey(() => Module)
    @Column
    module: string;

    @Column({ type: DataType.JSON, defaultValue: {} })
    metadata: string;
}