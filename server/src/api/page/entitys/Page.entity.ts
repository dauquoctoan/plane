import {
  BelongsTo,
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Is,
  Length,
  Model,
  Table,
} from 'sequelize-typescript';
import { Label } from 'src/api/issue/entitys/Label.entity';
import { User } from 'src/api/user/entitys/User.entity';
import { ACCESS } from 'src/constants/entity-constant';
import { INVALID_ACCESS } from 'src/constants/message-constant';
import { PageLabel } from './PageLabel.entity';
import sequelize from 'sequelize';
import { PageBlock } from './PageBlock.entity';
import { PageFavorite } from './PageFavorite.entity';
import { Project } from 'src/api/project/entitys/Project.entity';
import { Workspace } from 'src/api/workspace/entitys/Workspace.entity';

@Table({ tableName: 'Pages' })
export class Page extends Model<Page> {
  @Column({
    type: sequelize.UUID,
    defaultValue: sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  })
  id: string;

  @ForeignKey(() => User)
  @Column({ type: sequelize.UUID })
  owned_by: string;

  @ForeignKey(() => Project)
  @Column({ type: sequelize.UUID })
  project_id: string;

  @ForeignKey(() => Workspace)
  @Column({ type: sequelize.UUID })
  workspace_id: string;

  @BelongsTo(() => Project, { foreignKey: 'project_id' })
  project: Project;

  @BelongsTo(() => Workspace, { foreignKey: 'workspace_id' })
  workspace: Workspace;

  @BelongsTo(() => User, { foreignKey: 'owned_by' })
  user: User;

  @HasMany(() => PageBlock, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  page_blocks: PageBlock[];

  @HasMany(() => PageFavorite, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  page_favorites: PageFavorite[];

  @BelongsToMany(() => Label, () => PageLabel)
  labels: Label[];

  @Length({ max: 255 })
  @Column({ allowNull: false })
  name: string;

  @Column({ type: DataType.JSON, defaultValue: {} })
  description: string;

  @Column({ type: DataType.TEXT('long') })
  description_html: string;

  @Column({ type: DataType.TEXT })
  description_stripped: string;

  @Is('access', value => {
    if (!ACCESS.includes(value)) throw Error(INVALID_ACCESS);
  })
  @Column
  access: string;

  @Column
  color: string;
}
