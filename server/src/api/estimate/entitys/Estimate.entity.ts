import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Length,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { EstimatePoint } from './EstimatePoint.entity';
import { Project } from 'src/api/project/entitys/Project.entity';
import sequelize from 'sequelize';
import { Workspace } from 'src/api/workspace/entitys/Workspace.entity';

@Table({ tableName: 'Estimates' })
export class Estimate extends Model<Estimate> {
  @Column({
    type: sequelize.UUID,
    defaultValue: sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  })
  id: string;

  @ForeignKey(() => Project)
  @Column({ type: sequelize.UUID })
  project_id: string;

  @ForeignKey(() => Workspace)
  @Column({ type: sequelize.UUID })
  workspace_id: string;

  /**
   * ! RELATIONSHIP
   */

  @HasMany(() => EstimatePoint, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    foreignKey: 'estimate_id',
  })
  estimate_points: EstimatePoint[];

  @BelongsTo(() => Project, { foreignKey: 'project_id' })
  projects: Project;

  @BelongsTo(() => Workspace, { foreignKey: 'workspace_id' })
  workspaces: Workspace;

  /**
   * ! PR
   */

  @Length({ max: 255 })
  @Column({ allowNull: false })
  name: string;

  @Column({ type: DataType.TEXT })
  description: string;
}
