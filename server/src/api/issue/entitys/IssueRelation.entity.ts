import {
  BelongsTo,
  Column,
  ForeignKey,
  Is,
  Model,
  Table,
} from 'sequelize-typescript';
import { Issue } from './Issue.entity';
import { RELATION } from 'src/constants/entity-constant';
import { INVALID_RELATION } from 'src/constants/message-constant';
import sequelize from 'sequelize';

@Table({ tableName: 'IssueRelations' })
export class IssueRelation extends Model<IssueRelation> {
  @Column({
    type: sequelize.UUID,
    defaultValue: sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  })
  id: string;

  @ForeignKey(() => Issue)
  @Column({ type: sequelize.UUID, allowNull: true })
  issue_id: string;

  @BelongsTo(() => Issue)
  issue: Issue;

  @ForeignKey(() => Issue)
  @Column({ type: sequelize.UUID, allowNull: true })
  related_issue_id: string;

  @BelongsTo(() => Issue)
  related_issue: Issue;

  @Is('relation_type', value => {
    if (!RELATION.includes(value)) throw Error(INVALID_RELATION);
  })
  @Column
  relation_type: string;
}
