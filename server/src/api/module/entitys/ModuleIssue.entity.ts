import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Module } from './Module.entity';
import { Issue } from 'src/api/issue/entitys/Issue.entity';

@Table
export class ModuleIssue extends Model {
    @ForeignKey(() => Module)
    @Column({ allowNull: false })
    module: number;

    @ForeignKey((() => Issue))
    @Column({ allowNull: false })
    issue: number;
}