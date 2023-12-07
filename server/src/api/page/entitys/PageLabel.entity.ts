import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Label } from 'src/api/issue/entitys/Label.entity';
import { Page } from './Page.entity';

@Table
export class PageLabel extends Model<PageLabel> {
    @ForeignKey(() => Label)
    @Column
    label: number;

    @ForeignKey(() => Page)
    @Column
    page: number;
}