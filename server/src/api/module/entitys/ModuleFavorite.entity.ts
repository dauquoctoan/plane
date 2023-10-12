import { BelongsTo, Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { User } from 'src/api/user/entitys/User.entity';
import { Module } from './Module.entity';
import sequelize from 'sequelize';

@Table
export class ModuleFavorite extends Model {
    @ForeignKey(() => User)
    @Column({ allowNull: false, type: sequelize.UUID })
    user_id: string;

    @BelongsTo(() => User)
    user: User;

    @ForeignKey((() => Module))
    @Column({ allowNull: false })
    module_id: number;

    @BelongsTo(() => Module)
    module: Module;
}   