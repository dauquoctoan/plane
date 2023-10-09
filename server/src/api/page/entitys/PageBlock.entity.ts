import { Column, DataType, ForeignKey, Length, Model, Table } from 'sequelize-typescript';
import { Issue } from 'src/api/issue/entitys/Issue.entity';
import { SORT_ORDER } from 'src/constants/entity-constant';
import { Page } from './Page.entity';

@Table
export class PageBlock extends Model {
    @ForeignKey(() => Page)
    @Column({ allowNull: false })
    page: number;

    @ForeignKey(() => Issue)
    @Column
    issue: number;

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