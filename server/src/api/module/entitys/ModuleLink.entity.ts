import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Module } from './Module.entity';

@Table
export class ModuleLink extends Model {
    @ForeignKey(() => Module)
    @Column
    module: number;

    @Column
    title: string;

    @Column
    url: string;

    @Column({ type: DataType.JSON, defaultValue: {} })
    metadata: string;
}