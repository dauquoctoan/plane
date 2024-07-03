import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Length,
  Model,
  Table,
} from 'sequelize-typescript';
import { Issue } from 'src/api/issue/entitys/Issue.entity';
import { SORT_ORDER } from 'src/constants/entity-constant';
import { Page } from './Page.entity';
import sequelize from 'sequelize';

@Table({ tableName: 'PageBlocks' })
export class PageBlock extends Model<PageBlock> {
  @Column({
    type: sequelize.UUID,
    defaultValue: sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  })
  id: string;

  @ForeignKey(() => Page)
  @Column({ type: sequelize.UUID, allowNull: true })
  page_id: string;

  @BelongsTo(() => Page)
  page: Page;

  @ForeignKey(() => Issue)
  @Column({ type: sequelize.UUID, allowNull: true })
  issue_id: string;

  @BelongsTo(() => Issue)
  issue: Issue;

  @Length({ max: 225 })
  @Column({ allowNull: false })
  name: string;

  @Column({ type: DataType.JSON, defaultValue: {} })
  description: string;

  @Column({ defaultValue: '<p></p>' })
  description_html: string;

  @Column
  description_stripped: string;

  @Column
  completed_at: Date;

  @Column({ defaultValue: SORT_ORDER })
  sort_order: string;

  @Column({ defaultValue: true })
  sync: boolean;
}
