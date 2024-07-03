import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Issue } from './Issue.entity';
import sequelize from 'sequelize';

@Table({ tableName: 'IssueBlockers' })
export class IssueBlocker extends Model<IssueBlocker> {
  @Column({
    type: sequelize.UUID,
    defaultValue: sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  })
  id: string;
  /**
   * ! FK
   */
  @ForeignKey(() => Issue)
  @Column({ type: sequelize.UUID, allowNull: true })
  block: string;

  @ForeignKey(() => Issue)
  @Column({ type: sequelize.UUID, allowNull: true })
  blocked_by: string;

  /**
   * ! RELATIONSHIP
   */

  @BelongsTo(() => Issue)
  issue_block: Issue;

  @BelongsTo(() => Issue)
  issue_blocked_by: Issue;
}
