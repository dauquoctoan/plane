import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Is,
  Model,
  Table,
} from 'sequelize-typescript';
import { Inbox } from './Inbox.entiy';
import { Issue } from 'src/api/issue/entitys/Issue.entity';
import { ISSUE_STATUS } from 'src/constants/entity-constant';
import { INVALID_ISSUE_STATUS } from 'src/constants/message-constant';
import sequelize from 'sequelize';

@Table({ tableName: 'InboxIssues' })
export class InboxIssue extends Model<InboxIssue> {
  @Column({
    type: sequelize.UUID,
    defaultValue: sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  })
  id: string;
  /**
   *
   * !FK
   */

  @ForeignKey(() => Issue)
  @Column({ type: sequelize.UUID, allowNull: false })
  issue_id: string;

  @ForeignKey(() => Inbox)
  @Column({ type: sequelize.UUID, allowNull: false })
  inbox_id: string;

  @ForeignKey(() => Issue)
  @Column({ type: sequelize.UUID, allowNull: true })
  id_issue_duplicate_to: string;

  /**
   * ! RELATIONSHIP
   */

  @BelongsTo(() => Inbox)
  inbox: Inbox;

  @BelongsTo(() => Issue)
  issue: Issue;

  @BelongsTo(() => Issue)
  duplicate_to: Issue;

  /**
   * ! PR
   */

  @Is('status', value => {
    if (!ISSUE_STATUS.includes(value)) throw Error(INVALID_ISSUE_STATUS);
  })
  @Column({ defaultValue: -2 })
  status: number;

  @Column
  snoozed_till: Date;

  @Column({ type: DataType.TEXT })
  source: string;
}
