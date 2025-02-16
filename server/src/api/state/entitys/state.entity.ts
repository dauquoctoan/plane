import { ApiTags } from '@nestjs/swagger';
import sequelize from 'sequelize';
import {
  Column,
  Model,
  Table,
  Length,
  Is,
  DataType,
  HasMany,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Issue } from 'src/api/issue/entitys/Issue.entity';
import { Project } from 'src/api/project/entitys/Project.entity';
import { User } from 'src/api/user/entitys/User.entity';
import { GROUP } from 'src/constants/entity-constant';
import { INVALID_GROUP } from 'src/constants/message-constant';

@Table({ tableName: 'States' })
export class State extends Model<State> {
  @Column({
    type: sequelize.UUID,
    defaultValue: sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  })
  id: string;

  @ForeignKey(() => Project)
  @Column({ type: sequelize.UUID, allowNull: true })
  project_id: string;

  @BelongsTo(() => Project, 'project_id')
  project_detail: string;

  @ForeignKey(() => User)
  @Column({ type: sequelize.UUID, allowNull: true })
  created_by: string;

  @BelongsTo(() => User, 'created_by')
  project_info: User;

  @HasMany(() => Issue, { foreignKey: 'state_id' })
  issues: Issue[];

  @Length({ min: 1, max: 255 })
  @Column({ allowNull: false })
  name: string;

  @Column({ type: DataType.TEXT })
  description: string;

  @Length({ min: 1, max: 255 })
  @Column({ allowNull: false })
  color: string;

  @Length({ max: 100 })
  @Column
  slug: string;

  @Column({ defaultValue: 65535, type: DataType.FLOAT })
  sequence: number;

  @Is('group', value => {
    if (!GROUP.includes(value)) {
      throw new Error(INVALID_GROUP);
    }
  })
  @Column({ allowNull: false })
  group: string;

  @Column({ defaultValue: false })
  default: boolean;
}
