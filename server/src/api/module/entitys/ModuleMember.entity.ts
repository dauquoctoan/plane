import { BelongsTo, Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Module } from './Module.entity';
import { User } from 'src/api/user/entitys/User.entity';
import sequelize from 'sequelize';

@Table
export class ModuleMember extends Model {
    @ForeignKey(() => Module)
    @Column({ allowNull: false })
    module_id: number;

    @BelongsTo(() => Module)
    module: Module;

    @ForeignKey(() => User)
    @Column({ allowNull: false, type: sequelize.UUID })
    member: string;

    @BelongsTo(() => User)
    user: User;
}