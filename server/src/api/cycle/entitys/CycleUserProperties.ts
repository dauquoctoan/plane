import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Cycle } from './Cycle.entity';
import sequelize from 'sequelize';
import { DEFAULT_PROPS } from 'src/constants/entity-constant';
import { User } from 'src/api/user/entitys/User.entity';
import { Project } from 'src/api/project/entitys/Project.entity';

@Table({ tableName: 'CycleUserProperties' })
export class CycleUserProperties extends Model<CycleUserProperties> {
  @Column({
    type: sequelize.UUID,
    defaultValue: sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  })
  id: string;

  @ForeignKey(() => Cycle)
  @Column({ type: sequelize.UUID })
  cycle_id: string;

  @ForeignKey(() => User)
  @Column({ type: sequelize.UUID })
  user_id: string;

  @ForeignKey(() => Project)
  @Column({ type: sequelize.UUID })
  project_id: string;

  @Column({ type: DataType.JSON, defaultValue: DEFAULT_PROPS.filters })
  filters: string;

  @Column({ type: DataType.JSON, defaultValue: DEFAULT_PROPS.display_filters })
  display_filters: string;

  @Column({
    type: DataType.JSON,
    defaultValue: DEFAULT_PROPS.display_properties,
  })
  display_properties: string;

  /* =================== */

  @BelongsTo(() => User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
  })
  user: User;

  @BelongsTo(() => Cycle, {
    foreignKey: 'cycle_id',
    onDelete: 'CASCADE',
  })
  cycle: Cycle;

  @BelongsTo(() => Project, {
    foreignKey: 'project_id',
    onDelete: 'CASCADE',
  })
  project: Project;
}
