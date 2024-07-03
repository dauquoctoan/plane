import sequelize from 'sequelize';
import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from 'src/api/user/entitys/User.entity';
import { Project } from './Project.entity';

@Table({ tableName: 'ProjectPublicMembers' })
export class ProjectPublicMember extends Model<ProjectPublicMember> {
  @Column({
    type: sequelize.UUID,
    defaultValue: sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  })
  id: string;

  @ForeignKey(() => User)
  @Column({ allowNull: false, type: sequelize.UUID })
  member: string;

  @BelongsTo(() => User, { foreignKey: 'member' })
  user: User[];
}
