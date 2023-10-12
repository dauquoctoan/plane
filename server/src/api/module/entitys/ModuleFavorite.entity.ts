import { BelongsTo, Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { User } from 'src/api/user/entitys/User.entity';
import { Module } from './Module.entity';

@Table
export class ModuleFavorite extends Model {
    @ForeignKey(() => User)
    @Column({ allowNull: false })
    user: string;

    @ForeignKey((() => Module))
    @Column({ allowNull: false })
    module_id: number;

    @BelongsTo(() => Module)
    module: Module;
}   