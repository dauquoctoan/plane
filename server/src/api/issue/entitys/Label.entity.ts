import {
  BelongsTo,
  BelongsToMany,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Page } from 'src/api/page/entitys/Page.entity';
import { PageLabel } from 'src/api/page/entitys/PageLabel.entity';
import { IssueLabel } from './IssueLabel.entity';
import { Issue } from './Issue.entity';
import { Project } from 'src/api/project/entitys/Project.entity';
import { Workspace } from 'src/api/workspace/entitys/Workspace.entity';
import { User } from 'src/api/user/entitys/User.entity';
import sequelize from 'sequelize';

@Table({ tableName: 'Labels' })
export class Label extends Model<Label> {
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

  @BelongsTo(() => Project, { foreignKey: 'project_id' })
  project_info: Project;

  @ForeignKey(() => User)
  @Column({ type: sequelize.UUID })
  created_at: string;

  @BelongsTo(() => User, { foreignKey: 'created_at' })
  user_info: User;

  @ForeignKey(() => Workspace)
  @Column({ type: sequelize.UUID, allowNull: true })
  workspace_id: string;

  @BelongsTo(() => Workspace, { foreignKey: 'workspace_id' })
  worspace_info: Workspace;

  @BelongsToMany(() => Page, () => PageLabel)
  page: Page[];

  @BelongsToMany(() => Issue, () => IssueLabel)
  issues: Issue[];

  @Column
  parent: string;

  @Column
  name: string;

  @Column
  description: string;

  @Column
  color: string;
}
