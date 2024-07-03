import sequelize from 'sequelize';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Workspace } from 'src/api/workspace/entitys/Workspace.entity';

@Table({ tableName: 'FileAssets' })
export class FileAsset extends Model<FileAsset> {
  @Column({
    type: sequelize.UUID,
    defaultValue: sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  })
  id: string;
  /**
   * !FK
   */
  @ForeignKey(() => Workspace)
  @Column({ type: sequelize.UUID, allowNull: false })
  workspace_id: string;

  /**
   * ! RELATIONSHIP
   */

  @BelongsTo(() => Workspace, { foreignKey: 'workspace_id' })
  workspace: Workspace;

  /**
   * ! PR
   */

  @Column({ type: DataType.JSON, defaultValue: {} })
  attributes: string;

  @Column({ allowNull: false })
  asset: string;
}
