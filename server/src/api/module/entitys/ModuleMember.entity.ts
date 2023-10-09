import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Module } from './Module.entity';
import { User } from 'src/api/user/entitys/User.entity';

@Table
export class ModuleMember extends Model {
    @ForeignKey(() => Module)
    @Column({ allowNull: false })
    module: number;

    @ForeignKey(() => User)
    @Column({ allowNull: false })
    member: string;
}