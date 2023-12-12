import { BelongsTo, Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { User } from 'src/api/user/entitys/User.entity';
import { Module } from './Module.entity';
import sequelize from 'sequelize';

@Table
export class ModuleFavorite extends Model<ModuleFavorite> {
    @ForeignKey(() => User)
    @Column({ allowNull: false, type: sequelize.UUID })
    user_id: string;

    @ForeignKey((() => Module))
    @Column({ type: sequelize.UUID, allowNull: true })
    module_id: string;

    @BelongsTo(() => User,{foreignKey:'user_id'})
    user: User;

    @BelongsTo(() => Module,{foreignKey:'module_id'})
    module: Module;
}   