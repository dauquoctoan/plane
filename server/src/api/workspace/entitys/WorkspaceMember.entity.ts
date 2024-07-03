import {
  Column,
  ForeignKey,
  Model,
  Table,
  Is,
  DataType,
  BelongsTo,
} from 'sequelize-typescript';
import { Workspace } from './Workspace.entity';
import { User } from 'src/api/user/entitys/User.entity';
import { DEFAULT_PROPS, ROLE } from 'src/constants/entity-constant';
import { INVALID_ROLE } from 'src/constants/message-constant';
import sequelize from 'sequelize';

@Table({ tableName: 'WorkspaceMembers' })
export class WorkspaceMember extends Model<WorkspaceMember> {
  @Column({
    type: sequelize.UUID,
    defaultValue: sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  })
  id: string;
  /**
   * ! WorkspaceMember
   * @ForeignKey Workspace, User
   */

  @ForeignKey(() => Workspace)
  @Column({ type: sequelize.UUID, allowNull: false })
  workspace_id: string;

  @ForeignKey(() => User)
  @Column({ allowNull: false, type: sequelize.UUID })
  member: string;

  /* ================================================== */

  @BelongsTo(() => Workspace, { foreignKey: 'workspace_id' })
  workspace: Workspace;

  @BelongsTo(() => User, { foreignKey: 'member' })
  user: User;

  @Is('role', value => {
    if (!ROLE.includes(value)) {
      throw new Error(INVALID_ROLE);
    }
  })
  @Column({ defaultValue: 10 })
  role: number;

  @Column({ type: DataType.TEXT })
  company_role: string;

  @Column({ type: DataType.JSON, defaultValue: DEFAULT_PROPS })
  view_props: string;

  @Column({ type: DataType.JSON, defaultValue: DEFAULT_PROPS })
  default_props: string;

  @Column({ type: DataType.BOOLEAN, defaultValue: true })
  is_active: boolean;
}
