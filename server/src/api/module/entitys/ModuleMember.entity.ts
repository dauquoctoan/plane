import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Module } from './Module.entity';
import { User } from 'src/api/user/entitys/User.entity';
import sequelize from 'sequelize';

@Table({ tableName: 'ModuleMembers' })
export class ModuleMember extends Model<ModuleMember> {
  @ForeignKey(() => Module)
  @Column({ type: sequelize.UUID, allowNull: true })
  module_id: string;

  @ForeignKey(() => User)
  @Column({ allowNull: false, type: sequelize.UUID })
  member: string;

  /* ================================================== */

  @BelongsTo(() => Module, { foreignKey: 'module_id' })
  module: Module;

  @BelongsTo(() => User, { foreignKey: 'member' })
  user: User;
}
