import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Issue } from './Issue.entity';
import sequelize from 'sequelize';

@Table({ tableName: 'IssueAttachments' })
export class IssueAttachment extends Model<IssueAttachment> {
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
  issue_id: string;

  /**
   * ! RELATIONSHIP
   */

  @BelongsTo(() => Issue)
  issue: Issue;

  /**
   * ! PR
   */

  @Column({ defaultValue: {}, type: DataType.JSON })
  attributes: string;

  @Column({ allowNull: false })
  asset: string;
}
