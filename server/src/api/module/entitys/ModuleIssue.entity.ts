import { BelongsTo, Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Module } from './Module.entity';
import { Issue } from 'src/api/issue/entitys/Issue.entity';
import sequelize from 'sequelize';

@Table
export class ModuleIssue extends Model<ModuleIssue> {
    @ForeignKey(() => Module)
    @Column({ type: sequelize.UUID, allowNull: false })
    module_id: string;

    @BelongsTo(() => Module)
    module: Module;

    @ForeignKey((() => Issue))
    @Column({ type: sequelize.UUID, allowNull: true })
    issue_id: string;

    @BelongsTo(() => Issue)
    issue: Issue;
}