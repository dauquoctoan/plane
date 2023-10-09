import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Label } from 'src/api/issue/entitys/Label.entity';
import { Page } from './Page.entity';

@Table
export class PageLabel extends Model {
    @ForeignKey(() => Label)
    @Column({ allowNull: false })
    label: number;

    @ForeignKey(() => Page)
    @Column({ allowNull: false })
    page: number;
}